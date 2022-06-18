# Node-Weather-Server

- Based on Andrew Meade's Nodejs Udemy Class

**To run program - npm run server**

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

1. Setup about route to render a title with HTML
2. Setup a weather route to send back JSON
    - Object with forecast and location strings
3. Test your work by visiting both in the browser.

## HBS Package

- A way to make html files into a template see the following steps..

1. NPM install the hbs dependency
2. Make a folder called 'views' and then a file, mocking the name of the html file. For example, instead of writing "index.html", write "index,hbs"
4. Copy and paste the html contents into a new .hbs file

**HTML File**

```

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Help</title>
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <h1>About</h1>
    <p>Created by Robin Warden
</body>
</html>

```

4. In the app.js file, add this code

```
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'))

```

5. Also in the app.js file, render the file you are using as an object with words that will be repeated in your project

```

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Robin Warden'
    })
})

```

6. In the hbs file, make the following adjustments to the html. Notice the properties that are in curly braces inside the h1 and p tags

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Page</title>
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <h1>{{title}}</h1>
    <img src="./img/prof_pic.jpeg" alt="profile picture">
    <p>Created by {{name}}</p>
</body>
</html>

```

7. Delete the coresponding index.html file.

#### Challenge: Create a template for the help page

1. Setup a help page to render a help message to the screen
2. Setup the help route and render the template with an example message,
3. Visit the route in the browser and see your help message print.

#### Challenge: Create a partial for the footer

1. Setup the template for the footer partial "Created by Some Name"
2. Render the partial at the bottom of all three pages
3. Test your work by visiting all three pages

#### Challenge: Create and render a 404 page with handlebars

1. Setup the template to render the header and footer
2. Setup the template to render an error message in a paragraph.
3. Render the template for both 404 routes
    - Page not found
    - Help article not found
4. Test your work. Visit /what and /help/units

## Query Strings

- Are embedded in the url and always start with a "?" mark with a key value pair (key=value). To add additional options with it we use "&" For example:

```

localhost:3000/products?search=games&rating=5

```

- If you want to make the search query required, you would make an if statement like this

```

app.get('/products', (req, res) => {
    //To make search required
    if(!req.query.search) {
        res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

```

***If you receive this errror:*** undefined
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
- That means the server tried to respond twice (the first response was "undefined" and second was the headers error), which cannot be done. You can only send 1 response. ***This can be resolved by adding a return statement before "res.send" which will stop the function from continuing to execute after it realizes the search query isn't there***

```

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

```

#### Challenge: Update weather endpoint to accept address
1. No address? Send back an error message
2. Address? Send back the static JSON
    - Add address property onto JSON which returns the provided address
3. Test /weather and /weather?address=lawrenceville

#### Challenge: Wire up /weather

1. Require geocode/forecast into app.js
2. Use the address to geocode
3. Use the coordinates to get forecast
4. Send back the real forecast and location