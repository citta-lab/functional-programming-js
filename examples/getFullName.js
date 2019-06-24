class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// functional appraoch 
const getFullName = person => [person.firstName, person.lastName].join(' ');

// example test
const person = new Person('Bob', 'Marley');
console.log(getFullName(person)); // returns Bob Marley 

