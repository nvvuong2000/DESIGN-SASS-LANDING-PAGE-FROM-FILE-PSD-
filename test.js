'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    if(n%3 ===0 && n%5===0)
        {
            console.log('FizzBuzz');
            
        }
        if(n%3 ===0 && n%5!==0)
        {
            console.log('Buzz');
            
        }
        if(n%3 !==0 && n%5===0)
        {
            console.log('Fizz');
            
        }
        if(n%3 !==0 && n%5!==0)
        {
            console.log('FizzBuzz');
            
        }
        
    // Write your code here

}
