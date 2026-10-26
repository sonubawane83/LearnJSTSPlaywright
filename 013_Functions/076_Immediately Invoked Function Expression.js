
//IIFE (Immediately Invoked Function Expression) interview asked 

(function(){  // Self Call 
    console.log("Hi")
})();
//An IIFE is a function that runs the moment it is defined. You do not call it separately, 
// the () at the end calls it right away. It is useful for one-time setup code.

// Arrow function 
(()=>{  // Self Call 
    console.log("Hi")
})();