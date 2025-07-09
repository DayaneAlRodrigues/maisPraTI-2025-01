const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = '0';//tirei a chave pro proteção, utilize uma chave própria ao testar o codigo
   

document.addEventListener('DOMContentLoaded', async ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const imdbID = urlParams.get('id');
    const result = document.getElementById('result');

    if(imdbID){
        try {
            const url = `${BASE_URL}?i=${imdbID}&plot=full&apikey=${API_KEY}`;
            const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Erro HTTP status: ${response.status}`);
        }
        const data = await response.json();
        if(data.Response ==='True'){
            openDetails(data);
        }else {
            alert("Não foi encontrado a descrição do filme");
        }

        }catch (error) {
            alert(error);
        }
    }

})

function openDetails(data){
    result.innerHTML = `
    <img src="${data.Poster}" alt="${data.Title}">
    <div class="movie__details_info">
        <h2>${data.Title} (${data.Year})</h2>
        <p><strong>Gênero:</strong> ${data.Genre}</p>
        <p><strong>Diretor:</strong> ${data.Director}</p>
        <p><strong>Atores:</strong> ${data.Actors}</p>
        <p><strong>Duração:</strong> ${data.Runtime}</p>
        <p><strong>Classificação IMDb:</strong> ${data.imdbRating}</p>
        <p><strong>Sinopse:</strong> ${data.Plot}</p>
        <p><strong>País:</strong> ${data.Country}</p>
        <p><strong>Idioma:</strong> ${data.Language}</p>
        <p><strong>Prêmios:</strong> ${data.Awards}</p>
    </div>
    `
}


