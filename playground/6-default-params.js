//Default Parameters

const greeter = (name = 'Person', age) => {
    //name = 'Person' is the default parameter if none is given when the function is called
    console.log('Hello ' + name)
}

greeter('Robin')
greeter() //Hello Person

//Destructuring Default Parameters

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}
// const transaction = (type, {label, stock}) => {
//     console.log(type, label, stock)
// }

//transaction('order') //Will give you TypeError: Cannot destructure property `label` of 'undefined' or 'null'.

//Can be destructured with a default parameter as seen below...

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
} //returns undefined or nothing at all but no type errors

