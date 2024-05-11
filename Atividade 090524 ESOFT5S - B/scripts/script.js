let params = new URLSearchParams(document.location.search);
let pokemon = params.get("name");

function trocarTitulo() {
    document.title = "Página do " + pokemon;
    document.querySelector('#hum').innerText = pokemon;
}

let pokemonLetraMinuscula = pokemon.toLowerCase();

(async () => {
    const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/' + pokemonLetraMinuscula
    ).then(response => response.json());

    document.querySelector(
        '#informacoes'
    ).textContent = 'Informações sobre o ' + pokemon;

    document.querySelector('#pokemon-img').src = response.sprites.front_default;

    let sprites = response.sprites;

    let spritesArray = Object.values(sprites); // Transforma o objeto sprites em um array

    spritesArray = spritesArray.filter(item => typeof item === 'string'); // Filtra o array para manter apenas as strings

    let currentImageIndex = 2;
    document.getElementById('pokemon-img').src = spritesArray[currentImageIndex];

    document.getElementById('pokemon-img').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % spritesArray.length;
        document.getElementById('pokemon-img').src = spritesArray[currentImageIndex];
    });
})();