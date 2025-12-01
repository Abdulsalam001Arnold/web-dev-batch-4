

console.log('start')
setTimeout(() => {
    console.log('this is timeout!')
}, 0)
console.log('running')
Promise.resolve().then(() => console.log('This is a promise'))
console.log('finish')


setTimeout(() => {
    console.log("This is a 2s delay")
}, 2000)

const interval = setInterval(() => {
    console.log('This is a 2s interval')
}, 2000)

clearInterval(interval)


// https://dragonball-api.com/api/characters




