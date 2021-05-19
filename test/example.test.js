// IMPORT MODULES under test here:

import { findById } from '../utils.js';
import { getPokedex, setPokedex, encounterPokemon, capturePokemon, totalEncounters, getPokemonNames, getPokemonCaptures, getPokemonEncounters, getPokemonColors } from '../local-storage-utils.js';

// import { example } from '../example.js';


const test = QUnit.test;

test('This test should take in an id value and compare it against the values of a given array and return the object corresponding to that initial value', (expect) => {
    //Arrange
    const someArr = [{ id:1, name: 'yes' }, { id:2, name: 'no' }];
    // Set up your arguments and expectations
    const expected = { id:1, name: 'yes' };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(someArr, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('This test should set a string in local storage and return that string with the tested function getPokedex', (expect) => {
    //Arrange
    const newPokedex = [{ id: 1, captured: 0, encountered: 1 }, { id: 2, captured: 0, encountered: 1 }];
    const stringyPokedex = JSON.stringify(newPokedex);
    localStorage.setItem('POKEDEX', stringyPokedex);
    // Set up your arguments and expectations
    const expected = [{ id: 1, captured: 0, encountered: 1 }, { id: 2, captured: 0, encountered: 1 }];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('This test should set a string in local storage and return that string with the tested function setPokedex', (expect) => {
    //Arrange
    const newPokedex = [{ id: 1, captured: 0, encountered: 1 }, { id: 2, captured: 0, encountered: 1 }];
    //Act 
    // Call the function you're testing and set the result to a const
    setPokedex(newPokedex);

    //Expect
    const stringyPokedex = localStorage.getItem('POKEDEX');
    const expected = JSON.parse(stringyPokedex);
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(newPokedex, expected);
});

// test('This test should set a string in local storage and return that string with the tested function setPokedex', (expect) => {
//     //Arrange
//     const newPokedex = [{ id: 1, captured: 0, encountered: 1 }, { id: 2, captured: 0, encountered: 1 }];
//     //Act 
//     // Call the function you're testing and set the result to a const
//     setPokedex(newPokedex);

//     //Expect
//     const stringyPokedex = localStorage.getItem('POKEDEX');
//     const expected = JSON.parse(stringyPokedex);
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(newPokedex, expected);
// });

test('This test should increment an item within an array, but only increment one value of that item (encounterPokemon)', (expect) => {
      //Arrange
    const newPokedex = [{ id: 1, captured: 0, encountered: 1 }, { id: 2, captured: 0, encountered: 1 }];
   // Set up your arguments and expectations
    const expected = [{ id: 1, captured: 0, encountered: 2 }, { id: 2, captured: 0, encountered: 1 }];
   
   //Act 
   // Call the function you're testing and set the result to a const
    setPokedex(newPokedex);
    encounterPokemon(1);
    const stringyPokedex = localStorage.getItem('POKEDEX');
    const actual = JSON.parse(stringyPokedex);

   //Expect
   // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('This test should increment an item within an array, but only increment one value of that item (capturePokemon)', (expect) => {
    //Arrange
    const newPokedex = [{ id: 1, captured: 0, encountered: 1 }, { id: 2, captured: 0, encountered: 1 }];
 // Set up your arguments and expectations
    const expected = [{ id: 1, captured: 1, encountered: 1 }, { id: 2, captured: 0, encountered: 1 }];
 
 //Act 
 // Call the function you're testing and set the result to a const
    setPokedex(newPokedex);
    capturePokemon(1);
    const stringyPokedex = localStorage.getItem('POKEDEX');
    const actual = JSON.parse(stringyPokedex);

 //Expect
 // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('This test should count all the total encounters and return that value as a number', (expect) => {
    //Arrange
    const newPokedex = [{ id: 1, captured: 0, encountered: 2 }, { id: 2, captured: 0, encountered: 3 }];
 // Set up your arguments and expectations
    const expected = 5;
 
 //Act 
 // Call the function you're testing and set the result to a const
    setPokedex(newPokedex);
    const actual = totalEncounters();

 //Expect
 // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('This test should look at the localstorage and return the names of the items present.', (expect) => {
    //Arrange
    const newPokedex = [{ id: 1, captured: 0, encountered: 2 }, { id: 2, captured: 0, encountered: 3 }];
 // Set up your arguments and expectations
    const expected = ['Bulbasaur', 'Charmander'];
 
 //Act 
 // Call the function you're testing and set the result to a const
    setPokedex(newPokedex);
    const actual = getPokemonNames();

 //Expect
 // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('This test should look at the localstorage and return the number of times each pokemon has been caught', (expect) => {
    //Arrange
    const newPokedex = [{ id: 1, captured: 2, encountered: 2 }, { id: 2, captured: 1, encountered: 3 }];
 // Set up your arguments and expectations
    const expected = [2, 1];
 
 //Act 
 // Call the function you're testing and set the result to a const
    setPokedex(newPokedex);
    const actual = getPokemonCaptures();

 //Expect
 // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('This test should look at the localstorage and return the number of times each pokemon has been encountered', (expect) => {
    //Arrange
    const newPokedex = [{ id: 1, captured: 2, encountered: 2 }, { id: 2, captured: 1, encountered: 3 }];
 // Set up your arguments and expectations
    const expected = [2, 3];
 
 //Act 
 // Call the function you're testing and set the result to a const
    setPokedex(newPokedex);
    const actual = getPokemonEncounters();

 //Expect
 // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('This test should look at the localstorage and return the colors of the items present.', (expect) => {
   //Arrange
    const newPokedex = [{ id: 1, captured: 0, encountered: 2 }, { id: 2, captured: 0, encountered: 3 }];
// Set up your arguments and expectations
    const expected = ['green', 'red'];

//Act 
// Call the function you're testing and set the result to a const
    setPokedex(newPokedex);
    const actual = getPokemonColors();

//Expect
// Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});