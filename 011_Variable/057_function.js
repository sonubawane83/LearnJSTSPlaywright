
/*
Function :
Reusable code that can call multiple Times 
functions have two Parts 
1. Define a Function 
2. calling FUnction 


*/

// 
//1st step Define of the function function is keyword and greet  
function greet(){  
    console.log("how are you");
}
//2nd step calling of the function 
greet();


/*

3. Difference between function scope and block scope
Feature	                            Function scope	                    Block scope
Defined by	                        Function {}	                         Any block {}
Variables	                        var is function-scoped	             let and const are block-scoped
Accessible outside the block?	    Yes, within the same function	      No
Example	                            function test() {}	                  if, for, {}

*/

function demo(){
    if(true){
        var x=10;
        let u =100;

    }
    console.log(x);
    console.log(u); //ReferenceError: u is not defined
}
demo();