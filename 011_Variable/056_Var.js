
var v=10;
var browser = "chrome";
var browser ="Firefox"; // Redeclaration allowed 
browser ="edge";   // reassignment allowed 

/*
Confusing ways 
var because it can cause unexpected bugs due to its function scope and redeclaration behavior.

var is generally avoided in modern JavaScript because it is function-scoped, allows redeclaration,
 and can cause unexpected bugs.
  let and const are block-scoped. We use let when a variable needs 
 reassignment and const when it does not. 
 In modern JavaScript and Playwright automation, 
 I prefer const by default and use let when the value needs to change.

 var was the keyword in javascript. It is functional-scoped , can be redeclared, can be reassigned , and get hoisted
 to the top of its scope with an intial value of undefined. 

 In modern automation code, we avoid var because it leaks out of if and for blocks, which cause confusing bugs in 
 test loops 
// if same varibale is used then no error will occured in run time and in comiple time 
// changeable 
// it can be chnage the value 100 of times so var keyword is not used 
*/
//functions-scoped 
var a=10;  // Global Scoped 
console.log(10); 

function printhello(){
    console.log("Hello");
    var a=20;   // Local Scoped  // Ressign the value // it will print only 
    console.log(a); 

    if(true){
        var a=30;
        console.log(a);
    }
}
printhello();







//hoisted

