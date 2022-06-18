const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { dirname } = require('path')
const foreCast = require('./utils/forecast')
const geocode = require('./utils/geocode')

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
        message: 'How can we help you?',
        title: 'Help',
        name: 'Robin Warden'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: "You must provide an address"
        })
    }else {
        res.send({
            forecast: foreCast(error, {lat}),
            location: geocode(erro),
            address: req.query.address
        })
    }
})

app.get('/products', (req, res) => {
    //To make search required
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error 404',
        message: 'Help article not found',
        name: 'Robin Warden'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error 404',
        message: 'Page not found',
        name: 'Robin Warden'
    })
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})