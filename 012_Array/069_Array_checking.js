
// checking array  return value true 
let result = Array.isArray([1,2,3,4]);
console.log(result); // Print true 

let result1 = Array.isArray("a");
console.log(result1); // False 



// every array 
let r = [80,90,78].every(s=> s > 70);
console.log(r); // true 

//some  = At Least one must pass 
[80,90,85].some(s=> s<70); // true
[80,60,85].some(s=> s<70); // false 