
/**
 * FUNCTIONAL METHODS 
 * @param {*} func 
 */

function negate(func){
    return function(){
        return !func.apply(null, arguments);
    }
}

function isNull(value){
    return value === null;
}

var isNotNull = negate(isNull);
const test1 = isNotNull(null);
const test2 = isNotNull({});

console.log(test1);
console.log(test2);