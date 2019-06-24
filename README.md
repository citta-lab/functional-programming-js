# functional-programming-js


## Pointers 
1. Treat `object` as values. We shouldn't mutate the object but return new object with desired result how map / reduce / filter works.
2. `Object.freeze()` can be used to avoid mutating the object. Example: `const person = Object.freeze(new Person('bob','murray'));` will prevent us changing the first or last name of the person object by doing `person.firstName = 'Tom'; // not allowed`. 
3. Functions behave like regular objects and we can pass functions as an arguments returned from other functions. This is nothing but higher order function. 

## Higher Order Functions 
By definition, functions can be passed as another functions arguments. 

### 1. Multiplication 
In this example we will pass `multiplication` function as an argument to achieve functional composition / higher order function behaviour. 
```javascript 
function applyOperations(a, b, operation){
    return operation(a,b);
}

const multiplication = (x,y) => x * y;

const result = applyOperations(5, 2, multiplication);
console.log(result);
```

### 2. Addition 
In this case we use functional conposition to achieve the similar behaviour. 
```javascript 
function add(a){
    return function (b){
        return a+b;
    }
}

const addResult = add(2)(5);
console.log(addResult);
```


## Object Oriented vs Functional Examples 

### 1. Simple Getter Methods
In object oriented approach we can define a method `getFullName` for `Person` class to retieve person complete name, so it would look like

#### 1.1 Class Method
```javascript 
getFullName(){
    return [this.firstName, this.lastName].join(' ');
}
```

#### 1.2 Functional Approach 
```javascript 
const getFullName = person => [person.firstName, person.lastName].join(' ');
```

### 2. Customizable Functions ( Higher Order Functions)
we will solve the problem of finding all the people who live in the US in normal appraoch as well as making use of higher order functions. 

### 1.1 Normal Approach 
```javascript 
function findPeopleInUS(people, place){
    for(let person of people){
        if(person.address === palce){
            console.log(person.firstName);
        }
    }
}

findPeopleInUS([p1,p2,p3], 'US');
```

### 1.2 Functional Composition Appraoch 
```javascript 
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
```
