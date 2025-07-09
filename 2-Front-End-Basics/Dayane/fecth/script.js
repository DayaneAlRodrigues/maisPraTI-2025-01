const titleInput = document.getElementById('title');
const searchButton = document.getElementById('search');
const result = document.getElementById('result');

async function searchMovie(){
    const titleSearch = titleInput.value.trim();
    const BASE_URL = 'https://www.omdbapi.com/';
    const API_KEY = '0';//tirei a chave pro proteção, utilize uma chave própria ao testar o codigo
    const url = `${BASE_URL}?s=${encodeURIComponent(titleSearch)}&apikey=${API_KEY}`;

    if (titleSearch === ''){
        result.innerHTML= '<p>Digite um título para buscar</p>';
        return;
    }

    try{
        const response = await fetch(url);
        const data = await response.json();

        if ( data.Response === 'True'){
            returnResults(data.Search);
        } else {
            result.innerHTML = '<p> Erro: não foi encontrado </p>';
        }

    }catch (error){
        result.innerHTML = `<p> Erro: ${error} </p>`;
    }

}

function returnResults(movies){
    result.innerHTML = '';
    if (movies && movies.length > 0){
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie_card');

            movieCard.innerHTML = `
            <a href="details.html?id=${movie.imdbID}" target="_blank">
            <img  id="poster" src="${movie.Poster}" alt="${movie.Title}"></a>
            <div class="movie__info">
                <h3>${movie.Title} (${movie.Year})</h3>
                
            </div>
            `
            result.appendChild(movieCard);
        });
    } else {
        result.innerHTML = 'Nenhum resultado foi encontrado';
    }
}

searchButton.addEventListener('click', searchMovie);



