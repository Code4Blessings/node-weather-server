//Using Fetch 


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (event) => {
    //Prevents the server from refreshing the pageon the client-side
    event.preventDefault()
    const location = search.value

    messageOne.textContent = 'Searching...'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((weatherData) => {
        if(weatherData.error) {
            messageOne.textContent = weatherData.error
        }else {
            messageOne.textContent = weatherData.location
            messageTwo.textContent= weatherData.forecast
        }
    })
})
})