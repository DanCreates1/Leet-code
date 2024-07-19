//Write a function createHelloWorld. It should return a new function that always returns "Hello World".
function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

// Usage
const helloWorldFunc = createHelloWorld();
console.log(helloWorldFunc()); 


/*Given an integer n, return a counter function.
This counter function initially returns n and then returns 1 more than the
previous value every subsequent time it is called (n, n + 1, n + 2, etc). */

function createCounter(n) {
    let count = n;
    return function() {
        return count++;
    };
}

// Usage 
const counter = createCounter(5);
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
