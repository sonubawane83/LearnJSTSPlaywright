// Hosting 

//Hosting is decleared before declaration is possible 
// but in case of let and const hosting it is not possible 
//function expression and arrow functions are not . 

console.log(greet("Alice")); // Works Before declerations 

function greet(name) {
    return `Hello ${name}!`;
}

sayHi("Bob"); // TypeError: sayHi is not a function

const sayHi = function (name) {

    return `Hi, ${name}!`;

};
