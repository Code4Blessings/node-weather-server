//Default Parameters

const greeter = (name = 'Person', age) => {
    //name = 'Person' is the default parameter if none is given when the function is called
    console.log('Hello ' + name)
}

greeter('Robin')
greeter() //Hello Person

//Destructuring Default Parameters

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)