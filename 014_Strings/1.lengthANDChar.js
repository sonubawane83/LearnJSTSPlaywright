/*
String is immutable if new . every Method return a New String 


*/
// Length 

// 1. Length  : character COunt not an property 
let a = "Playwright";
console.log(a.length); // 10

// 2. charAt(i) : char at index 
console.log(a.charAt(4)); //w
console.log(a.charAt(67)); //empty string 

// 3. .at(i) : char at index and support a negative last index 
console.log(a.at(-3)); //g
console.log(a.at(-34)); // undefined 
 


