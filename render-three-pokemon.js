export function renderThreePokemon() {
    let poke1 = getRandomPokemon();
    let poke2 = getRandomPokemon();
    let poke3 = getRandomPokemon();

    while (poke1.id === poke2.id || poke1.id === poke3.id || poke2.id === poke3.id) {
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();
    }
}

function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    const randomPokemon = pokemonData[randomIndex];
    return randomPokemon;
}