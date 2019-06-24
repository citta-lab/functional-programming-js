/**
 * HIGHER ORDER FUNCTIONS EXAMPLE 
 *
 */

// Multiplication 
function applyOperations(a, b, operation){
    return operation(a,b);
}

const multiplication = (x,y) => x * y;

const result = applyOperations(5, 2, multiplication);
console.log(result); // 10


// Addition 
function add(a){
    return function (b){
        return a+b;
    }
}

const addResult = add(2)(5);
console.log(addResult); // 7