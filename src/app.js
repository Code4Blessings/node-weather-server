const express = require('express')

console.log(__dirname)
console.log(__filename)

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Greetings from Express</h1>')
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '77 degrees',
        location: 'Georgia'
    })
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000.')
})