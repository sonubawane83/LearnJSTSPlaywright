
// types of function expression is similar to type 4 function 
function greet1(name1) {
    return `Hello , ${name1}`;
}


const greet2 = function (name1) {    // Function expression function not changin so const is used 
    return `Hello , ${name1}`;
}

console.log(greet2("Boob!"));
console.log(greet1("Boob!"));

// Access Modifier is not in Javascript 

// u create a function and give me name later 