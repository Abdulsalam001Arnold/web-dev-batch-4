
//let or const
let me = 'Lanre';
me = 'Adeola'; //This is re-assigning
// let me = '' This is re-declaring
console.error(me)

const hobby = 'coding';
console.log(hobby);
console.log(typeof hobby)

// let sum = 56.3
// console.log(typeof sum)


//Boolean
let isLoggedIn = true;

console.log(typeof isLoggedIn)


//undefined
let firstName;
console.log(typeof firstName)

//null

let lastName = null
console.log(typeof lastName)

//BigInt
let myNumber = BigInt(1234567890123456789012345678901234567890);

console.log(typeof myNumber)


//Reference Data Types

//Object

//Array

//function

//key-value paired

const person = {
    name: 'Quadri',
    age: 99,
    job: 'Developer'
}

console.table(person)

const myArray = ['Lanre', 23, true, null, undefined, 'Adeola']
console.table(myArray)
//length = index + 1

//a block of code to carry out a particular task = Function

function greet() {
    console.log('Hello Lanre!')
}

greet()


let num1 = 2
let num2 = 3

let sum = num2 ** num1
console.log(sum)

let first = '10'
let second = '50'
// let total = first + second

console.log(first += second)

//comparison operator
let compare = '5' === 5

console.log(compare)

// let comp1 = 'ABDullLAH@001'
// let comp2 = 'Abdullah@001'

// let compResult = comp1 == comp2
// console.log(compResult)


let comp1 = 23
let comp2 = 10

let compNum = 16
let compNum2 = 16

let compNumResult = compNum >= compNum2 && comp2 < comp1
console.log(compNumResult)
let orResult = compNum > compNum2 || comp1 > comp2

console.log(orResult)


let className = 'web-dev-batch-4'

let classResult = className !== 'Web-Dev-Batch-4'
console.log(classResult)

let a = 10
a++
console.log(a)

let b = 5
b--
console.log(b)

greet('Moses', 'Quadri')
//Types
function greet(name, secondName) {
    // let fullName = name + ' ' + secondName
    console.log(`Hello ${name} and ${secondName}`)
}


function summation(a, b) {
    console.log(a + b)
}

summation(10, 5)
// this

//Function Expressions
const myFunctionExpression = function() {
    console.log('This is a function expression')
}

myFunctionExpression()


const myArrowFunction = () => {
    console.log('This is an arrow function')
}

// myArrowFunction()
(function () {
    console.log('This is an IIFE - Immediately Invoked Function Expression')
})()

function Person(name, age){
    this.name = name
    this.age = age
}

const person1 = new Person('IK', 34)

console.log(`My name is ${person1.name} and I am ${person1.age} years old.`)
//Hoisting
//IIFE - Immediately Invoked Function Expression
//Async functions
//Methods (Functions as Object properties)

const numbers = [5, 10, 15, 20, 25]
console.log(numbers[1])

const Agos = {
    Bloomy: {
        web: {
            class: 'Web dev batch 4'
        }
    }
}

console.log(Agos.Bloomy.web.class)

//Javascript Data Types and their Methods
let myString = 'Lanre'
let myString2 = 'Dammy'
console.log(myString.length)
console.log(myString.toLowerCase())

console.log(myString.includes('d'))

console.log(myString.charAt(0))
console.log(myString.concat(' ', myString2))

//Number methods
let myNumbers = 34.34005
console.log(typeof myNumbers.toString()) 
let priceSum = myNumbers.toFixed(2)
console.log(priceSum)

//Array Methods
//Array Iteration Methods

//if/else logic and switch statement

if(-23 > 0) {
    console.log('User is connected')
}else{
    console.log('User is not connected')
}
