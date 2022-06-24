# Node-Weather-Server

- Based on Andrew Meade's Nodejs Udemy Class

**To run program - npm run server**

**Deployed to https://warden-weather-app.herokuapp.com/ | https://git.heroku.com/warden-weather-app.git**

- This works in conjunction with node-weather-app repository

- The playground files are also a continuation from the lessons learned while building the Node-NotesApp2

## Initializing this file for git

1. In the root of the directory, "git init"
2. git add .
3. git commit -m "Changed something"




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

## Default Parameters

``` 

const greeter = (name = 'Person', age) => {
    //name = 'Person' is the default parameter if none is given when the function is called
    console.log('Hello ' + name)
}

greeter('Robin')
greeter() //Hello Person

```

## Destructuring Default Parameters

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

- transaction('order') //Will give you TypeError: Cannot destructure property `label` of 'undefined' or 'null'.

- Can be destructured with a default parameter as seen below...

```

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
} //returns undefined or whatever the default value is equal to but no type errors

```

## Fetch 

- Here we are wiring the front-end to this endpoint. But for now we are only printing it to the console which can be found when you accrfess dev tools on localhost:3000

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

#### Challenge: Fetch Weather

1. Setup a call to fetch weather for Boston
2. Get the parse JSON response
    - If error property, print error
    - If no error, print location and forecast
3. Refresh the broswer and test your work.

#### Challenge: Use input value to get weather

1. Migrate fetch call into the submit callback
2. Use the search text as the address query string value
3. Submit the form with a valid and invalid value to test

#### Challenge: Render content to paragraphs

1. Select the send message p from JavaScript
2. Just before fetch, render loading message and empty p
3. If error, render error
4. If no error, render location and forecast
5. Test your work! search for errors and valid locations

Learning more about how to use git now.