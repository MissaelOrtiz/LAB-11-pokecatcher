import { findById } from './utils.js';

// This function will pull down the personal pokedex from localstorage and parse it into a usable state.
export function getPokedex() {
    const stringyPokedex = localStorage.getItem('POKEDEX');
    if (!stringyPokedex) {
        return [];
    }
    const pokedex = JSON.parse(stringyPokedex);
    return pokedex;
}

// This function will take a modified personal pokedex and stringify it before returning it to localstorage.
export function setPokedex(newPokedex) {
    const stringyPokedex = JSON.stringify(newPokedex);
    localStorage.setItem('POKEDEX', stringyPokedex);
}

// This function will activate when there are pokemon generated and rendered, using getPokedex() to pull down the personal pokedex and update that pokemon's captured value, then returning this personal pokedex to localstorage.
export function capturePokemon(selectedPokemonId) {
    const personalPokeDex = getPokedex();
    const selectedPokemon = findById(personalPokeDex, selectedPokemonId);
    selectedPokemon.captured++;
    setPokedex(personalPokeDex);
}

// This function will activate when a pokemon is encountered. It will use the getPokedex() function to pull down the personal pokedex, take this pokemon and increment its encountered value on the personal pokedex, and return the personal pokedex to localstorage. 
export function encounterPokemon(PokemonId) {
    const personalPokeDex = getPokedex();
    const matchingPokemon = findById(personalPokeDex, PokemonId);
    // returns {id: 1, captured: 0, encountered: 24}
    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        let newItem = {
            id: PokemonId,
            captured: 0,
            encountered: 1
        };
        personalPokeDex.push(newItem);
    }
    setPokedex(personalPokeDex);
}