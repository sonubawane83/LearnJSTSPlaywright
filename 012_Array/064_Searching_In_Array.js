// Searching in Array 
// Inbuild Methods 
let results =["Pass","Fail","Error","Bad"];


// indexof = return a 1st index , or is no index is found then return -1
console.log(results.indexOf("Fail")); // 1 
console.log(results.indexOf("skip")); // -1 

// lastIndexOf = return the last index ,index is found then return -1
console.log(results.lastIndexOf("Bad")); //3
console.log(results.lastIndexOf("skip")); // -1 

// includes = return boolean the value is present or not if not present that index than false will return

console.log(results.includes("Bad")); //true
console.log(results.includes("skip")); // false

//find : find return 1st matching element 

let nums =[10,20,30,45];

console.log(nums.find(x => x>15));  // x=> x> 15 is an expression , => Arrow function  x => which  // 20 
console.log(nums.find(m=> m>50)); // undefined 

// findIndex : find the Index of the value  
console.log(nums.findIndex(j=> j>15)); // Index is 1  
console.log(nums.findIndex(j=> j>50));  // -1 

// findLast : 
console.log(nums.findLast(t=> t>15)); //  45  Index count from last index 
console.log(nums.findLast(t=> t>50));  // undefined 

// findLastIndex :
console.log(nums.findLastIndex(f=> f>15)); //  45 index is 3 
console.log(nums.findLastIndex(f=> f>50));  // -1 