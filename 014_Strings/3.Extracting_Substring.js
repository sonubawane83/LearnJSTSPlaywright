// Extracting Substring 

//1. .slice(start,ends -1?) slice() does not modify the original string.
//slice(start, end) means take characters starting at start and stop just before end.
let a = "JavaScript"; 
console.log(a.slice(1,4));// ava  index start from 0 
//  4-1 =3 

console.log(a.slice(-8,-9));// 0 -9-1=-8 -8=0 // nothing will print 

console.log(a.slice(-9,-5)); // avas
console.log(a.slice(-6,-3));// scr
