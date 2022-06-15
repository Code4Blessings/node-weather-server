const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { dirname } = require('path')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Robin Warden'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Robin Warden'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'How can we help you?'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '85 degrees',
        location: 'Lawrenceville'
    })
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})