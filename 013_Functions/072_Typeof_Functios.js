
// function is keyword  4 types of Function 
/*
A function is a reusable block of code that perform a specfic task. Instead of repeating logic, 
you define it once and call it whenever needed 

1. Define a function 
1. calling function 

syntax  ->
Defination Function
function name(params){
// code that you want to execute }

calling function 
name (90); 
 
 */

// 1st type: Basic 1 Normal Function without argumenet and no return type

function gret(){
    console.log("Hi");
}
gret(); 

/// 2nd type : With Argument / Parameter but no return type 

function greatByName(name){ // name(parameter)

   console.log("Hi",name); // not return anything 
    
}
greatByName("Sonu"); // name(argument)
greatByName("Sangeeta");

let name1 = greatByName("Sumit");
console.log(name1); // that not return anything  // Undefined Print 

/// 3rd type of Function without argument with return type

function sayHello()
{
    console.log("Hi232323");
    return "Hello23232";
}

let relative = sayHello();
console.log(relative); // Return something 


// 4th type : With Arguments with return type

function sumofTwoNumber(a,b){
    return a+b;
}

let c = sumofTwoNumber(4,5);
let c1 = sumofTwoNumber(10,50);

console.log(c); // 9
console.log(c1); // 60
