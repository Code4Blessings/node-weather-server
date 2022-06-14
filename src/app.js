const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

//app.com
//app.com/help
//app.com/about

const aboutFilePath = path.join(__filename, '../public/about.html')
const helpFilePath = path.join(__filename, '../public/help.html')


app.use(express.static(publicDirectoryPath))


app.get('/weather', (req, res) => {
    res.send({
        forecast: '85 degrees',
        location: 'Lawrenceville'
    })
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})