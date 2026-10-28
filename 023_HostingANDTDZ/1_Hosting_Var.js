// Hosting 
// Varibale in scoped 

console.log(greeting);  // undefined
var greeting = "Hello";
console.log(greeting); // Hello 


// Behind the scenes 

/*
var greeting;   hoisted with undefined
console.log(greeting);   undefined
greeting = "Hello";    assignment stay in place
console.log(greeting);   "Hello"




*/


