// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compare } from '../utils.js';

const test = QUnit.test;

test('should take two integers and see if the first number is greater than, less than or equal to the second number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
   // const expected = true;
    const tooHigh = compare(20, 10);
    const tooLow = compare(1, 10);
    const equal = compare(10, 10);
    
    //Act 
    // Call the function you're testing and set the result to a const
   // const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(tooHigh, 'too high :(');
    expect.equal(tooLow, 'too low :(');
    expect.equal(equal, 'You Win! :D');
});
