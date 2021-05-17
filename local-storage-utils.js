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

export function encounterPokemon() {

}

// This function will activate when a pokemon is selected to be captured. It will use the getPokedex() function to pull down the personal pokedex, take this pokemon and increment its caught value on the personal pokedex, and return the personal pokedex to localstorage. If this pokemon
export function capturePokemon(selectedPokemonId) {
    const personalPokeDex = getPokedex();
    const matchingPokemon = findById(personalPokeDex, selectedPokemonId);
    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        const newItem = {
            id: selectedPokemonId,
            captured: 1,
            encountered: 1
        };
        personalPokeDex.push(newItem);
    }
    setPokedex(personalPokeDex);
}