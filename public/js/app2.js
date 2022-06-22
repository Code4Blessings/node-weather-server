//Fetch 


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (event) => {
    //Prevents the server from refreshing the pageon the client-side
    event.preventDefault()
    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((weatherData) => {
        if(weatherData.error) {
            console.log(weatherData.error)
        }else {
            console.log(weatherData.location)
            console.log(weatherData.forecast)
        }
    })
})
})