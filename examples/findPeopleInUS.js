/**
 * 
 * HIGHER ORDER FUNCTION EXAMPLE 
 */

 // setup 
 class Person {
    constructor(firstName, lastName, country){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }
}

/**
 * APPRAOCH 1: (normal way)
 * normal way of finding people live in desired place 
 * @param {*} people 
 * @param {*} place 
 */
function findPeopleInUS(people, place){
    for(let person of people){
        if(person.country === place){
            console.log(person.firstName);
        }
    }
}


const p1 = new Person('bob', 'marley', 'US');
const p2 = new Person('jane', 'elliot', 'UK');
const p3 = new Person('nick', 'smith', 'US');
findPeopleInUS([p1,p2,p3], 'US'); // bob, nick 

/**
 * APPROACH 2: (functional way)
 * @param {*} people 
 * @param {*} action 
 */
function findPeople(people, action){
    for(let person of people){
        action(person)
    }
}

var action = function(person){
    if(person.country === 'US'){
        console.log(person.firstName);
    }
}

const P1 = new Person('neal', 'peter', 'US');
const P2 = new Person('tom', 'andy', 'UK');
const P3 = new Person('sam', 'long', 'US');
findPeople([P1,P2,P3], action); // bob, nick 
