const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const aboutDirectoryPath = path.join(__dirname, '../public/about.html')
const helpDirectoryPath = path.join(__dirname, '../public/help.html')


app.use(express.static(publicDirectoryPath))
app.use(express.static(aboutDirectoryPath))
app.use(express.static(helpDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: '77 degrees',
        location: 'Georgia'
    })
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000.')
})