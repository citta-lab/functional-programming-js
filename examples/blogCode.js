
// Create Developer Class with few properties
class Developer {
     constructor(favLang, type, salary, expInYears){
        this.favLang = favLang;
        this.type = type;
        this.salary = salary;
        this.expInYears = expInYears;
    }
}

// Creating few developers for our use case
const devOne = new Developer('javascript', 'fullstack', 100000, 5);
const devTwo = new Developer('GoLang', 'backend', 120000, 3);
const devThree = new Developer('java', 'backend', 170000, 9);
const devFour = new Developer('shell', 'system', 90000, 5);
const devFive = new Developer('ruby', 'fullstack', 100000, 1);
const devSix = new Developer('react', 'frontend', 40000, 1);

//Add bonus

const developers = [ devOne, devTwo, devThree, devFour, devFive, devSix ];
//console.log(developers)

// for(let i=0; i<developers.length; i++){
//    if( developers[i].expInYears >= 3 ) developers[i].bonus = 5000;
// }
//  console.log(developers)

const devWithBonus = developers.map( developer => {
    if (developer.expInYears >= 3) developer.bonus = 5000;
    return developer;
});

// console.log(devWithBonus)
//console.log(" developers : "+JSON.stringify(developers));


var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

//   var test = officers.map(officer => {
//       if( officer.id > 25) officer.hello = 'Hi';
//       return officer;
//   })

  const officersIds = officers.map(officer => officer.id);
  //console.log(officers);

// loadash example does the mutation as well 
// var array = [{type: 'hello', payload: 'blah'}, {type: 'goodbye', payload: 'blah'}];

// const arr = _.map(array, function(el){
//     if (el.type === 'hello') el.check = 'done';
//     return el;
// });

// console.log(arr); // new array with mutated data
// console.log(array) // old array but object got mutated as well

const loopSalary = () => {
    const arr = [];
    const bonus = 3000;
    for(let i=0; i<developers.length; i++){
        arr.push(developers[i].salary + bonus)
    }
    return arr;
}

console.log(loopSalary()); // [ 103000, 123000, 173000, 93000, 103000, 43000 ]


const mapSalary = (bonus) => developers.map(dev => {
    return dev.salary + bonus;
})

console.log(mapSalary(3000))

const devs = (addBonus) => dev => dev.salary + addBonus;

const mapSalaryAgain = (bonus) => developers.map(devs(bonus));
console.log(mapSalaryAgain(3000))

/**
 * Map Implementation 
 * @param {*} array : array of data
 * @param {*} callback : function to manipulate the data
 */
const myMap = (array, callback) => {
    const length = array.length;
    const result = new Array(length);

    let i = -1;
    while(++i < length){
        result[i] = callback(array[i], i, array)
    }

    return result;
}

const myMapResult = myMap(developers, dev => {
    return dev.salary + 3000;
});

console.log(myMapResult); // 

/**
 * Chaining new map function to Array.prototype,
 * which takes a callback function to execute.
 */
Array.prototype.myNewMap = function (callback) {
    const length = this.length;
    const result = new Array(length);

    let i = -1;
    while(++i < length){
        result[i] = callback(this[i], i, this)
    }
    return result;
}

// executing newly built map on an array
const myNewMapResult = developers.myNewMap(dev => {
    return dev.salary + 3000;
});

// printing the result array
console.log(myNewMapResult);

/**
 * Defining function to calculate average
 * per year experince salary in the company.
 */
const averageSalaryPerYear = () => {
    let totalSalary = 0;
    let totalExp = 0;

    for(let i=0; i<developers.length; i++){
        totalSalary = totalSalary + developers[i].salary;
        totalExp = totalExp + developers[i].expInYears;
    }

    return Math.floor(totalSalary/totalExp);
}

console.log(averageSalaryPerYear()); // 25833

/**
 * Using reduce to calculate the total salary,
 * total experince. Returning array has both of
 * these values.
 */
const averageSalExp = developers.reduce(([tSal, tExp], developer) => {
    tSal = tSal + developer.salary;
    tExp = tExp + developer.expInYears;
    return [tSal, tExp]
}, [0,0])

// array destructuring to extract the values instead of ugly array[index]
const [totalSalary, totalExp ] = averageSalExp;
const averageSalPerYear = Math.floor(totalSalary / totalExp);

console.log(averageSalPerYear); // 25833

/**
 * Reducer Implementation 
 * @param {*} array - array of data ( can be numbers or objects )
 * @param {*} callback - function to execute on the data
 * @param {*} accumulator - value to start adding 
 */
const myReducer = (array, callback, accumulator) => {
    const length = array.length;
    let i = -1;

    // if user didn't initialize accumulator with some value
    if(!accumulator && length > 0){
        accumulator = array[++i];
    }

    while(++i < length){
        /**
         * In our case `callback(accumulator, array[i])` is enough
         * but i'm trying to following the MDN syntax. i.e we are 
         * not making use of index `i` or `array` param in our 
         * callback function.
         */
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

/**
 * Example 1:
 * Adding numbers using our myReducer.
 */
const addingNumbers = myReducer([2,3,4,1], (acc, num) => ( acc + num ), 0);
console.log(addingNumbers); // 10


/**
 * Example 2:
 * Calculating average salary gain per year. callbackFn is our core 
 * function to dectate gow to handle the data. 
 */
function callbackFn([tSal, tExp], data) {
    tSal = tSal + data.salary;
    tExp = tExp + data.expInYears;
    return [tSal, tExp];
}

// using destructuring to extract the final result from myReducer 
const [ tSalary, tExperince ] = myReducer(developers, callbackFn, [0,0]);
const aveSalPerYear = Math.floor(tSalary/tExperince);

console.log(aveSalPerYear); // 25833



Array.prototype.myNewReducer = function (callback, accumulator){
    const length = this.length;
    let i = -1;

    if( !accumulator && length > 0){
        accumulator = this[++i];
    }

    while(++i < length){
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

const addNumbers = [3,5,9,1,2].myNewReducer((acc, num) => acc + num, 0);
console.log(addNumbers); // 20 

const averageSalaryGainPerYear = developers.myNewReducer(([tSal, tExp], data) => {
    tSal = tSal + data.salary;
    tExp = tExp + data.expInYears;
    return [tSal, tExp];
}, [0,0]);

const [ tSalaryAmount, tExperinceYears ] = averageSalaryGainPerYear;
const averageGainPerYear = Math.floor(tSalaryAmount / tExperinceYears);

console.log(averageGainPerYear);

/**
 * Function to find developers of required experience.
 * @param {*} requiredExp - developer required exp
 */
const expDevelopers = (requiredExp) => {
    let length = developers.length;
    let result = [];
    for(let i=0; i<length; i++){
        let developer = developers[i];
        if(developer.expInYears > requiredExp){
            result.push(developer);
        }
    }

    return result;
}

let loopedDevelopers = expDevelopers(3);
console.log(loopedDevelopers.length); // 3 

/**
 * Function using filters to find min experience developers.
 * @param {*} requiredExp - - developer required exp
 */
const expFilteredDevelopers = (requiredExp) => developers.filter(developer => {
    return developer.expInYears > requiredExp;
});

let filteredDevelopers = expFilteredDevelopers(3);
console.log(filteredDevelopers.length); // 3

console.log(JSON.stringify(loopedDevelopers) === JSON.stringify(filteredDevelopers)); // true
console.log(developers.length); // 6 ( i.e original developers is still unchanged )


/**
 * Filter implementation 
 * @param {*} array - array to be filtered
 * @param {*} callback - callback function to process the array
 */
const myFilter = (array, callback) => {
    let length = array.length;
    let result = new Array();

    let i = -1;
    while(++i < length){
        let value = array[i];
        let filteredValue = callback(value, i, array);
        if(filteredValue){
            result.push(value);
        }
    }

    return result;
}

// Focusing more of composition 
const filterCallback = (requiredExp) => value => value.expInYears > requiredExp;
const myFilterDevs = myFilter(developers, filterCallback(3));
console.log(myFilterDevs.length); // 3 

// Inline callback with our new myFilter
const myFilterDevsTwo = myFilter(developers, developer => {
    return developer.expInYears > 3;
});
console.log(myFilterDevsTwo.length); //3


/**
 * Filter as array prototype method.
 */
Array.prototype.myNewFilter = function(callback) {
    let length = this.length;
    let result = new Array();

    let i = -1;
    while(++i < length){
        let value = this[i]; 
        let filteredValue = callback(value, i, this);
        if(filteredValue){
            result.push(value);
        }
    }
    return result;
}

const myNewFilteredDevs = developers.myNewFilter(developer => developer.expInYears > 3);
console.log(myNewFilteredDevs.length);

/**
 * @param {*} minExp - minimum experience of developer
 * @param {*} bonus - bonus amout to be added
 */
const calTotalSalary = (minExp, bonus) => developers
    .filter(developer => developer.expInYears > minExp)
    .map(developer => developer.salary + bonus)
    .reduce((acc, salary) => acc + salary, 0)

const total = calTotalSalary(3, 5000);
console.log(total); // 375000

//console.log(' tSalary : '+sal);
//console.log(' tExperince : '+exp);

// created new array with same data
const developersCopy = [ devOne, devTwo, devThree, devFour, devFive, devSix ];

/**
 * Using map to determine if developers are 'Junior' or 'Senior'
 * @param {*} minExp - min experience to check
 */
const result = (minExp) => developersCopy.map(developer => {
    let title = developer.expInYears >= minExp ? 'Senior' : 'Junior';
    return developer.title = title;
});

// console.log(result(3));  // [ 'Senior', 'Senior', 'Senior', 'Senior', 'Junior', 'Junior' ]

// console.log(developersCopy);
console.log("*******")

let developersCopyTwo = [ devOne, devTwo, devThree, devFour, devFive, devSix ];

let newArray = [...developersCopyTwo].map(developer => {
    let title = developer.expInYears >= 3 ? 'Senior' : 'Junior';
    return developer.title = title;
});

console.log(newArray);
console.log(developersCopyTwo);


const tenThousandElements = (limit) => {
    let result = [];
    let i = -1;

    while(++i < limit){
        let random = Math.floor(Math.random() * Math.floor(100));
        result.push(i * random)
    }

    return result;
};

const numArray = tenThousandElements(10000000);
// console.log(numArray);
console.log('***********')

const newNumArray = () =>  {
    return numArray
    .map(num => num * 99)
    .reduce((acc,num) => acc+num);
}

console.log(numArray.length)


/**
 * Below functions are executed against array of random  
 * numbers between 0 & 10000000. i.e numArray, which has
 * a length of 10000000. 
 */
const processData = () => {
    const start = Date.now();
    numArray.map(num => num * 99).reduce((acc,num) => acc+num);
    
    const timeTaken = Date.now() - start;
    console.log(timeTaken);
}

const processDataInLoop = () => {
    const start = Date.now();
    let total = 0;
    for(let i=0; i< numArray.length; i++){
        total = total + numArray[i] * 99;
    }

    const timeTaken = Date.now() - start;
    console.log(timeTaken);
};

processData(); // 8229ms
processDataInLoop(); // 16ms