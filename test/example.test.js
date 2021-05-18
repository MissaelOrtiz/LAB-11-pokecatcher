// IMPORT MODULES under test here:

import { findById } from '../utils.js';

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
