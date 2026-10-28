function startBrowser(){   // outer function 
let name ="edge";

function closeBrowser(){ // inner function 
    console.log(name);
    
}
return closeBrowser

}
const run = startBrowser(); // function expression 
run();

// closure  is when inner function remembers the varibale and can access the variables from 
// Outer Function even after the outer function execution is finished 
