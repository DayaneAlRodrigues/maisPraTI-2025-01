const products = [
    {
        id: 0,
        nome: "Camiseta básica",
        imagem: "./assets/0.jpg",
        preco: "R$ 50,00",
        descricao: "Apoie uma causa nobre com estilo! A Sociedade dos Pets Abandonados apresenta a exclusiva Camiseta I Love My Dog. Esta peça de vestuário não é apenas uma forma de mostrar seu amor pelos cães, mas também uma maneira significativa de contribuir para uma causa importante.",
    },
    {
        id: 1,
        nome: "XÍCARA I LOVE MY CAT",
        imagem: "./assets/1.jpg",
        preco: "R$ 20,00",
        descricao: "Demonstre seu amor pelos felinos e apoie uma causa especial! A TIA DOS GATO tem o prazer de apresentar a charmosa Xícara I Love My Cat. Esta peça encantadora não só reflete seu carinho pelos gatos, mas também contribui diretamente para uma causa importante, ajudando gatos em necessidade.",
    },
    {
        id: 2,
        nome: "MOLETOM",
        imagem: "./assets/2.jpg",
        preco: "R$ 70,00",
        descricao: "Conforto, estilo e solidariedade em uma só peça! A TIA DOS DOGS tem o orgulho de apresentar o aconchegante Moletom TIA DOS DOGS. Esta peça essencial combina estilo e conforto, enquanto apoia uma causa nobre, ajudando cães abandonados a encontrarem um lar cheio de amor."
    },
    {
        id: 3,
        nome: "CAMISETA OS RENEGADOS",
        imagem: "./assets/3.jpg",
        preco: "R$ 50,00",
        descricao: "Mostre seu apoio com estilo e ajude uma causa importante! A ONG Os Renegados tem o prazer de apresentar a exclusiva Camiseta Os Renegados. Esta peça não só permite que você exiba seu apoio à nossa missão, mas também contribui diretamente para nossos esforços de resgatar e cuidar de animais abandonados."
    },
    {
        id: 4,
        nome: "CAMINHA OBA",
        imagem: "./assets/4.jpg",
        preco: "R$ 100,00",
        descricao: "Conforto e aconchego para seu pet, apoio para uma causa especial! A Organização Bicho Amigo apresenta a aconchegante Caminha Oba. Esta caminha foi projetada para proporcionar máximo conforto ao seu pet enquanto você apoia uma causa nobre, ajudando animais abandonados a encontrarem lares cheios de amor."
    },
    {
        id: 5,
        nome: "PORTA COPO",
        imagem: "./assets/5.jpg",
        preco: "R$ 25,00",
        descricao: "Praticidade e solidariedade em cada detalhe!A ONG de Apoio Infantil apresenta o encantador Porta-Copo ONG de Apoio Infantil. Este item prático e estiloso não só protege suas superfícies de manchas e marcas, mas também contribui para uma causa nobre, ajudando crianças em situação de vulnerabilidade."
    },
    {
        id: 6,
        nome: "ARRANHADOR PARAÍSO",
        imagem: "./assets/6.jpg",
        preco: "R$ 80,00",
        descricao: "Diversão e bem-estar para seu gato, apoio para uma causa especial! A Vida Felina tem o prazer de apresentar o encantador Arranhador Paraíso. Este arranhador foi cuidadosamente projetado para proporcionar horas de diversão e exercício ao seu gato, enquanto você contribui para uma causa nobre, ajudando gatos abandonados a encontrarem lares amorosos."
    },
    {
        id: 7,
        nome: "CASACO",
        imagem: "./assets/7.jpg",
        preco: "R$ 120,00",
        descricao: "Estilo e solidariedade em uma peça única! A ONG de Apoio Infantil apresenta o elegante Casaco ONG de Apoio Infantil. Este casaco não só oferece conforto e estilo, mas também permite que você apoie uma causa nobre, ajudando crianças em situação de vulnerabilidade a terem um futuro melhor."
    },
    {
        id: 8,
        nome: "CHINELO DE LÃ",
        imagem: "./assets/8.jpg",
        preco: "R$ 50,00",
        descricao: "Conforto e solidariedade nos seus pés! A Sheep Rescue tem o prazer de apresentar o aconchegante Chinelo de Lã Sheep Rescue. Este chinelo não só proporciona máximo conforto e aquecimento para seus pés, mas também contribui para uma causa nobre, ajudando na proteção e resgate de ovelhas em situações de risco."
    },
]

function renderizar() {

    const produtosNoHtml = document.getElementById("produtos");
    
    if (produtosNoHtml) {
        produtosNoHtml.innerHTML = ''; // Limpa qualquer conteúdo existente

        products.forEach((prod) => {
            const produtoHTML = `
                <div class="container__produto">
                    <div class="price__tag">${prod.preco}</div>
                    <img class="img__produto" src="${prod.imagem}" />
                    <div class="card__footer">
                        <div class="nome__produto">${prod.nome}</div>
                        <a class="container__produto__button comprar" key="${prod.id}">Comprar</a>
                        <a class="container__produto__button ver-produto" data-id="${prod.id}" href="descricao.html">Ver produto</a>
                    </div>
                </div>
            `;
            produtosNoHtml.innerHTML += produtoHTML;
        });
    }
}

// This ensures renderizar() runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderizar);