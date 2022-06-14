# Node-Weather-Server

- Based on Andrew Meade's Nodejs Udemy Class

### Intro to Express

```

const express = require('express')

const app = express()


app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})



app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})


```

#### Challenge: Setup 2 routes

1. Setup an about route and render a page title
2. Setup a weather route and render a page title
3. Test your work by visiting both in the browser

## HTML and JSON

#### Challenge: Update Routes

1. Setup about route to rendewr a title with HTML
2. Setup a weather route to send back JSON
    - Object with forecast and location strings
3. Test your work by visiting both in the browser.