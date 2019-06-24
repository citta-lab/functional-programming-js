/**
 * Find all students live in the same country and also goes to same school.
 * Prepwork: Student class is extended from Person class which stores the basic
 * person information as mentioned below. 
 */

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = null;
    }

    getAddress(){
        return this.address;
    }

    setAddress(aadrs){
        this.address = aadrs
    }
}

class Student extends Person {
    constructor(firstName, lastName, school){
        super(firstName, lastName);
        this.school = school;
    }
}

// example students data 
var bob = new Student('Bob', 'Marley', 'UMB');
bob.setAddress('US');

var rob = new Student('Rob', 'Eddie', 'Prenston');
rob.setAddress('UK');

var tom = new Student('Tom', 'Brich', 'KU');
tom.setAddress('US');

var neal = new Student('Neal', 'Patty', 'UMB');
neal.setAddress('US');


//functional composition 
function selector(country, school){
    return function(student){
        return student.address === country && student.school === school;
    }
}

var findStudentBy = function(friends, selector){
    return friends.filter(selector);
}

// Example usage 
var names = findStudentBy([bob, rob, tom, neal], selector('US', 'UMB'));
console.log(names);


