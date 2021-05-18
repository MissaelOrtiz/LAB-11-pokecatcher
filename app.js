import { renderThreePokemon } from './render-three-pokemon.js';
import { capturePokemon, totalEncounters } from './local-storage-utils.js';

// import functions and grab DOM elements
const catchButton = document.getElementById('catch-button');
// We render 3 pokemon for the initial encounters. This can be put behind a button later on! (like a rustling bush)
renderThreePokemon();
// set event listeners to catch the pokemon using the DOM element we pulled in.
catchButton.addEventListener('click', () => {
  // bring in the user choice and have it store it in a nicebox
    const userChoice = document.querySelector('input:checked');
  // Grab the value (pokemon id) of the user choice and store it in a nicebox
    const pokemonId = userChoice.value;
  // plug that pokemonid into the capture pokemon function
    capturePokemon(pokemonId);
  // spawn a new set of pokemon!
    renderThreePokemon();
});

if (totalEncounters() === 99) {
    window.location.replace('./results/');
}