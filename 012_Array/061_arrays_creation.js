
/*
Arrays : Arrays are ordered collection of values.
Javascript arrays are dynamic and can hold mix types it is hetrogenuous it support multiple data types 
but in java it is not allowed 


*/
// Array Literl (preferred)

let arr =[10,20,30,40];
//console.log(arr.length()); length is property , 
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]); // print undefined


// creating Arrays
// Array Literl (preferred)
let browser =["Chrome, Firefox, Safari"];

// Array Constructor

//let score = new Array(12); // [ <12 empty items> ]
let score = new Array(0,12);
console.log(score); 

let test = Array.of(10,20,30);   // array.of 
console.log(test);
console.log(test[0]);

// Array.from() builds an array from something iterable

let chars = Array.from("hello"); // ["h", "e", "l", "l", "o"]
console.log(chars);

