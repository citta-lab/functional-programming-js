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

/**
 * APPRAOCH 3: HOC
 * @param {*} people 
 * @param {*} selector 
 * @param {*} printer 
 */
function findPeopleHOC(people, selector, printer){
    people.forEach(person => {
        if(selector(person)){
            printer(person.firstName);
        }
    })
}

var inUS = person => person.country === 'US';

const person1 = new Person('Adam', 'peter', 'US');
const person2 = new Person('Eve', 'andy', 'UK');
const person3 = new Person('Andrew', 'long', 'US');

findPeopleHOC([person1, person2, person3], inUS, console.log);
