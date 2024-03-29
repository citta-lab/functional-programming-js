// set-up
class Person {
    constructor(firstName, lastName, country, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.dob = dob
    }
}

const p1 = new Person('bob', 'marley', 'US', 1965);
const p2 = new Person('jane', 'elliot', 'UK', 1980);
const p3 = new Person('nick', 'smith', 'US', 1982);
const p4 = new Person('jack', 'randy', 'US', 1994);
const p5 = new Person('rob', 'dane', 'UK', 1989);
const p6 = new Person('megha', 'p', 'IND', 1991);

/**
 * Reduce HOC Function Use:
 * Count number of people live in each country.
 * Syntax: arr.reduce(callback(accumulator, currentValue[, index[, array]]), [, initialValue])
 */

 const people = [p1, p2, p3, p4, p5, p6];
 const countryCount = people.reduce((acc, person) => {
    const country = person.country;
    // if object doesn't have country already then add 1, otherwise increment 
    acc[country] = ( acc[country] === undefined ) ? 1 : acc[country] + 1;
    return acc;
 }, {});

 console.log(countryCount); // { US: 3, UK: 2, IND: 1 }

 /**
  * Reduce HOC Function with Map:
  * Count number of people live in each country.
  */

  const getCountries = person => person.country;
  const accFunction = (acc, country) => {
      acc[country] = (acc[country] === undefined) ? 1 : acc[country] + 1;
      return acc;
  };
  // function composition
  const countryStat = people.map(getCountries).reduce(accFunction, {});
  
  console.log(countryStat); // { US: 3, UK: 2, IND: 1 }


  /**
   * Filter HOC Function use:
   * Concat people firstname who were born in US and after 1980.
   */

   const bornInUS = person => person.country === 'US' && person.dob > 1980;
   const names = person => person.firstName;

   const filteredPeople = people.filter(bornInUS).map(names).join(' and ');
   console.log(filteredPeople); // nick and jack

   /**
    * Filter HOC Function with more Compostion:
    */

   const usBorn = person => person.country === 'US';
   const eightyBorn = person => person.dob > 1980;
   const peopleName = person => person.firstName;
   
   const usEightyBornPeople = people.filter(usBorn).filter(eightyBorn).map(peopleName).join(' and ');
   console.log(usEightyBornPeople); // nick and jack 

   /**
    * Map Implementation 
    * Syntax from MDN: arr.map(function callback(currentValue[, index[, array]]) 
    * Clue: Takes an array, do it's magic and returns new array.
    */

    // First Implementation 
    const map = (arr, fn) => {  
        const length = arr.length;
        const result = new Array(length);

        let i=-1;
        while(++i < length){
            result[i] = fn(arr[i], i, arr);
        }
        return result;
    }

    // call back function
    const fn = n => n*n;
    // testing the map functionality 
    let squareTestOne = map([2,4,1,5], fn);
    console.log(squareTestOne); // [ 4, 16, 1, 25 ];

   
    // Second Implementaion 
    Array.prototype.myMap = function(callback) {
        const length = this.length;
        const result = new Array(length);

        let i=-1;
        while(++i < length){
            result[i] = callback(this[i], i, this);
        }

        return result;
    }

    const squareTestTwo = [2,4,1,5].myMap((n) => n*n);
    console.log(squareTestTwo);












