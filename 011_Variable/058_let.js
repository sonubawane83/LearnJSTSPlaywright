
/*
let is keyword 
1. let -> morden way for changing the value 
 let is blocked scoped ,(lives only inside { }), can be reassigned, but cannot redeclared in the same scope.
 It is hosited but no initialized it before declaration throws a referenceError.

 use let when value is genuiely change  -> countries , retry attempts, current url page....etc





*/
let a = 10;

a = a + 1;  // Redeclared 
a = a + 1; 
console.log(a);

//let a = 60;  // cannot reassigned

// blocked scoped 
let teststatus = "Pending ";

if (teststatus === "Pending ") {

    let executiontime = 1200;   // blocked scoped  not used outside the blocked shows and eror not defined 


    console.log(executiontime);
}

console.log(executiontime); // error : executiontime is not defined 





