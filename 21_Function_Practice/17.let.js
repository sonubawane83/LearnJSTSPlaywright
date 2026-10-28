
let b =20; // Global scope 
console.log("global scope :" , b );

function printHello(){
console.log("hello");

let b =30;
//let b =45; SyntaxError: Identifier 'b' has already been declared
b=67; 
console.log(b);
 
if(true){
    let b =40;
console.log(b); 
    
}

console.log("let ->",b);


}printHello();