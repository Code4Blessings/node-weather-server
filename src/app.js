const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Greetings from Express!')
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/weather', (req, res) => {
    res.send('Your Weather')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000.')
})