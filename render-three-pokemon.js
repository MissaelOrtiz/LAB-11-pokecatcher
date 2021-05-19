import { pokemonData } from './pokemon-data.js';
import { encounterPokemon } from './local-storage-utils.js';
// img DOM elements
const pokeImg1 = document.getElementById('poke-img-1');
const pokeImg2 = document.getElementById('poke-img-2');
const pokeImg3 = document.getElementById('poke-img-3');
// radio button DOM elements
const pokeSelect1 = document.getElementById('poke-1');
const pokeSelect2 = document.getElementById('poke-2');
const pokeSelect3 = document.getElementById('poke-3');

export function renderThreePokemon() {
    // establish how many pokemon will spawn
    let poke1 = getRandomPokemon();
    let poke2 = getRandomPokemon();
    let poke3 = getRandomPokemon();
    // make sure that the pokemon that spawn aren't the same as any of the others
    while (poke1.id === poke2.id || poke1.id === poke3.id || poke2.id === poke3.id) {
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();
    }
    // render out the images
    pokeImg1.src = `./assets/${poke1.img}`;
    pokeImg2.src = `./assets/${poke2.img}`;
    pokeImg3.src = `./assets/${poke3.img}`;
    // The pokemon have been seen! Increment their ecounter values and add a value to their buttons for capture!
    encounterPokemon(poke1.id);
    encounterPokemon(poke2.id);
    encounterPokemon(poke3.id);
    pokeSelect1.value = poke1.id;
    pokeSelect2.value = poke2.id;
    pokeSelect3.value = poke3.id;
}


function getRandomPokemon() {
    const randomI = Math.floor(Math.random() * pokemonData.length);
    const randomPokemon = pokemonData[randomI];
    return randomPokemon;
}