//With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

const kelvin = 0
//variable will not change
const celcius = kelvin - 273
//celcius is 273 less than kelvin
let fahrenheit = celcius * (9/5) + 32;
//above is math for conversion 
fahrenheit = Math.floor(fahrenheit);
//above rounds down decimal answer
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
