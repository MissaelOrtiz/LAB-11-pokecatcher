import { getPokemonNames, getPokemonEncounters, getPokemonCaptures, getPokemonColors } from '../local-storage-utils.js';
const resetButton = document.getElementById('reset');

var ctx = document.getElementById('myChart').getContext('2d');

const names = getPokemonNames();
const capturedData = getPokemonCaptures();
const encounteredData = getPokemonEncounters();
const colors = getPokemonColors();

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: '# of Captures',
                data: capturedData,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
            {
                label: '# of Ecounters',
                data: encounteredData,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

resetButton.addEventListener('click', () => {
    localStorage.removeItem('POKEDEX');
    window.location.replace('../');
});