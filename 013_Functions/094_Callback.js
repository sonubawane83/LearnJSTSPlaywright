// callback function 

function pramod_doingwork(woker, callback){   // 1st function 
console.log("started the class of pW");
console.log("After finished the class");

callback(); // callback function
}

function callWife(){   // 2nd function 
    console.log("call a wife");
}

pramod_doingwork("PW class",callWife);  // argument in function pass of 2nd 