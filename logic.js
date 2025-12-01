
//IF/ELSE CONDITIONAL STATEMENT

if(10 > 23) {
    console.log('Condition is true')
}else{
    console.log('Condition is false')
}

let password = 'admin0505050505050505050'

//Goal: check if password is longer than 16 characters
// if(password.length <= 16) {
//     console.log('Password accepted')
// }else{
//     console.log('Password must not be longer than 16 characters')
// }

//Check if password is shorter than 6 characters or longer than 16 characters

if(password.length > 8 && password.length <= 16) {
    console.log('Password must be between 8 and 16 characters')
}else{
    console.log('Password accepted')
}
let num1 = 30
let num2 = 21

if(num1 < num2) {
    console.log(`${num1} is less than ${num2}`)
}else if(num1 === num2) {
    console.log(`${num1} is equal to ${num2}`)
}
else{
    console.log(`${num1} have no condition for ${num2}`)
}

//switch statement
let grade = 50
switch (true) {
    case (grade >= 90):
        console.log('Grade A')
        break;
        case (grade >= 80):
            console.log('Grade B')
            break;
            case (grade >= 70):
                console.log('Grade C')
                break;
                case (grade >= 60):
                    console.log('Grade D')
                    break;
                    default:
                        console.log('Grade F')
                        break;
}

//Array methods - 

const myArray = ['Lanre', 12, true, null, undefined, 'Moses']

myArray.push('Dammy')
myArray.pop()
myArray.unshift('Fikunmi', 23, 'Sodiq')
myArray.shift()

//splice
myArray.splice(0, 2, 'Quadri', 99)
console.table(myArray)


const numbers = [1, 2, 3, 4, "", 5, 6, 7, 8, 9, "", 10]

numbers.splice(0, 4)

const sorted = numbers.sort((a, b) => {
    return b - a
})

console.log(sorted)

//Non-mutating methods
const combined = myArray.concat(numbers)

console.log(combined)

const myArray2 = ['iojiorej', 44, 32, null, false]

//slice
console.log(myArray2.slice(0, 3))
console.log(myArray2)
//join
const hobbies = ['basketball', 'football', 'clubbing', 'coding']

console.log(hobbies.join('  '))

//includes
console.log(hobbies.includes('basketball'))

//Array iteration methods - map, filter, reduce

// const each = numbers.forEach((num, index) => {
//     return console.log(`Index: ${index + 1}, Number: ${num}`)
// })

const mapped = numbers.map((num, index) => {
    return num * 2
})

console.log(mapped)

const filtered = numbers.filter((num) => {
    return num % 2 !== 0
})

console.log(filtered)

const reduced = numbers.reduce((acc, val) => {
    return acc + val
})

console.log(reduced)

const printSome = numbers.some((num) => {
    return num > 5
})

console.log(printSome)

const printEvery = numbers.every((num) => {
    return num <= 1
})

console.log(printEvery)

const findOne = numbers.find((num) => {
    return num > 5
})

console.log(findOne)

const year = new Date().getFullYear()
const month = new Date().getMonth()
const date = new Date().getDate().toLocaleString()
// console.log(`This is big ${year}`)
console.log(date)


const person = {
    name: 'Lanre',
    age: 45,
}

console.log(person['age'])

//loop - for, while, for of, for in
//for loop - classic counter loop

for(let i = 0; i < numbers.length; i++) {
    console.log(`The number is ${i} and the value is ${numbers[i]}`)
}

//while loop - Conditional repitition
let count = 0

while(count < 5){
    console.log(count)
    count++
}

let userInput = "play"

while(userInput !== "quit") {
    console.log('Game is running')
    userInput = "quit"
}

//for of loop - iterate over iterable objects (arrays, strings)

for(const item of hobbies) {
    console.log(`Item: ${item}`)
}

//for in - Enumerating object keys

for (const key in person) {
    console.log(`${key}: ${person[key]}`)
}