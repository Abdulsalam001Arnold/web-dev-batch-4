

console.log('Hello world')

//Selecting elements
const title = document.getElementById('title')

const heading = document.querySelector('#title')

//Modifying elements
heading.textContent = "Hello world"

heading.style.color = 'red'
heading.style.fontSize = '60px'
heading.style.letterSpacing = '8px'

const container = document.querySelector('#container')

container.innerHTML = `<p>
This is a paragraph
</p>`

const image = document.querySelector('#image-tag')

image.setAttribute('src', 'https://www.w3schools.com/js/pic_bulboff.gif')
//Creating and removing elements
const mainContainer = document.createElement('main')

mainContainer.style.backgroundColor = 'red'
mainContainer.style.width = '20rem'
mainContainer.style.height = '20rem'

document.body.append(mainContainer)

//Event handling
const activeButton = document.createElement('button')

activeButton.innerHTML = `<p>
Click me!
</p>`

activeButton.style.backgroundColor = 'blue'
activeButton.style.color = 'white'
activeButton.style.padding = '10px'
activeButton.style.borderRadius = '10px'
activeButton.style.marginTop = '1rem'

document.body.appendChild(activeButton)

activeButton.addEventListener('click', () => {
    alert('User is now active')
})


const input = document.querySelector('#input-tag')

input.addEventListener('keypress', (event) => {
    alert(`User pressed ${event.key} on his/her keyboard`)
    console.log(event)
})

const form = document.querySelector('#signUpForm')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formElements = event.target.elements

    const username = formElements.username.value
    const password = formElements.password.value

    if(username !== "" && password !== "") {
        if(username === 'moses@27gboy' && password === '1234567') {
            alert(`Welcome back, ${username}`)
        }else{
            alert('Invalid username or password')
        }
    }else{
        alert('Please fill in all fields')
    }
})

let success = false
const queryDatabase = new Promise((resolve, reject) => {
    if(success) {
        resolve('Databse returned a value')
    }else{
        reject('Database returned an error')
    }
})

queryDatabase.then((response) => console.log(response)).then((secondResponse) => console.log(secondResponse)).catch((err) => console.error(err))


const fetchData = async () => {
    try{
        const response = await fetch('https://dragonball-api.com/api/characters')
        console.log(response)
        if(!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        // console.log('This is the object from response:', data)
        console.log(data.items)
        const myArray = data.items

        myArray.map((item) => {
            console.log(item.name)
            const myHeading = document.createElement('h1')
            myHeading.textContent = item.name
            document.body.append(myHeading)
        })
    }catch(err){
        if(err instanceof Error) {
            console.error(err.message)
        }
    }
}

fetchData()

console.log('I am adding something')


