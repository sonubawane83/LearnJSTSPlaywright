
//Infinity Literals : Are used to represent positive infinity in JavaScript. 
// It is a special numeric value that is greater than any finite number.

// positive 
let positiveInfinity = Infinity;
console.log(typeof positiveInfinity, positiveInfinity); // typeof is number because Infinity is a special numeric value

// Negative
let negativeInfinity = -Infinity;
console.log(typeof negativeInfinity, negativeInfinity); // typeof is number because -Infinity is a special numeric value

//Division
let result = 1 / 0; // Division by zero results in positive infinity
console.log(typeof result, result); // typeof is number because division by zero results in positive infinity


//NaN Literals : Are used to represent "Not-a-Number" in JavaScript.
// It is a special numeric value that indicates an undefined or unrepresentable value.

let nanValue= NaN;
console.log(typeof nanValue, nanValue); // typeof is number because NaN is a special numeric value
