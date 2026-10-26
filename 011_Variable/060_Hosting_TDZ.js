
/*
Hosting : 
Hosting in Javascript default behaviour of moving varibales and function DECLARATIONS to the 
top of their contaning scope during the compilation phase, BEFORE the code is actually executed.

How JAVAscript Engine Works 
phase 1: memory creation
phase 2: code execution

How var hosting works 

similar to flag hosting 

*/
// hosting is declared at the top and below that var is used 
console.log(greating);  // Undefined 
var greating ="hello"; 
console.log(greating);   // Print 



/// let
//console.log(a); //ReferenceError: Cannot access 'a' before initialization
//let a =10;

// const 
console.log(a1); //ReferenceError: Cannot access 'a1' before initialization
const a1 =10;

/*
TDZ Temporal dead zone 
console.log(a1); // Defination  
const a1 =10; // Decelaration 

Interview Ques: The TDZ is the period between when a scope starts and when the let/const decleration is encountere.
During this zone
the varibale Exists in Memory but is marked as "Uninitialized".
 And var is in undefined State 


*/


