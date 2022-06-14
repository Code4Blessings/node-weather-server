const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//app.com
//app.com/help
//app.com/about


app.get('/help', (req, res) => {
    res.send({
        name: 'Robin',
        age: 47
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
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