//Arrow function (ES6) acemascript 

/*

No retrun directly return in Arrow Function 
when it has returm then arrow function will work 
Remove the keyword function, remove the keyword retun, remove the curly braces and use the equal to arrow 
Arrow function work when u have a single line 
*/

const greet = function (name1) {
    return `Hello,${name1}`;
}


const greet1 = (name2) => `Hello,${name2}`;

console.log("Test");
console.log("test3");

// Arrow functions only generally work whenever ypu have single line 
const doubleIt = n => n * 2;
console.log(doubleIt(10));



// No Parameter - parens required 
const getENV = () => "staging";
console.log(getENV()); // staging will print 

//Suppose we have a multiline. can we use Arrow function : Yes 

const getResult = (score) => {
    if (score > 70) return "pass";
        return "fail";
    
}