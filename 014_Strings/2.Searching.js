// Searching String 8 

//1. .indexof : First index , -1 if absent 
let a = "Login Successful";

console.log(a.indexOf("Success")); //6
console.log(a.indexOf("test")); //-1


// 2. .lastIndexOf : last Index 
console.log(a.lastIndexOf("ful")); 
console.log(a.lastIndexOf("test1")); //-1

// 4. .includes : true/false 
console.log(a.includes("ful")); // true
console.log(a.includes("test1")); //false

//5. .startsWith : true/false
console.log(a.startsWith("Login")); // true
console.log(a.startsWith("test1")); //false

//6. .endsWith : true/ false
console.log(a.endsWith("ful")); // true
console.log(a.endsWith("test1")); //false

//7. .search : regex , index of 1st regex match -1 if none

let b = "Order #10245";
console.log(b.search(/\d+/));//7

// 8. .match(regex)
//9. .matchAll(regex)