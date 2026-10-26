
// Exctracting Substring 

let str = "Login_Test_Pass_001";

//slice (start,end) end is not included , negative allowed 

console.log(str.slice(0,5)); // 0 index , 4 index print Login 

console.log(str.slice(11));//Pass_001
console.log(str.slice(-1));

// substring(start, end) — no negative indexes

console.log(str.substring(6,10));// Test

// at() for a single character

str.at(0);  // "L"

str.at(-1); // "1"
