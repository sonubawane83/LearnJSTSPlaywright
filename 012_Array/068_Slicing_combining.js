// Slicing and combining
/*
Slice (start, end-1 ) - returns new array, does NOT Mute 

*/

let arr =[11,22,31,41,51];   // 0,1,2,3,4 = index
console.log(arr.slice(1,3)); // 2,3-1=2 > 22,31
console.log(arr.slice(-2));  // 41,51 till -2 // find out the number from end and print 
console.log(arr.slice(-3)); // 31,41,51 // reverse 

console.log(arr.slice(1)); // if not mention end then it will take the index 1 to end 
// 22,31,41,51 


// concatination : concat 

let a = [1,2];
let b= [3,4];
let c = a.concat(b,[5,6]);//[ 1, 2, 3, 4, 5, 6 ]
let c1 = a.concat(b);
console.log(c1);  //[ 1, 2, 3, 4 ]


// spread (morden way )// ...a,...b    spread concatenation 

console.log([...a,...b]);  // concatenation by number 


// Join : Array convert into String 
//let s = ["pass","fail","skip"].join(",");
let s = ["pass","fail","skip"].join("=");
console.log(s);












