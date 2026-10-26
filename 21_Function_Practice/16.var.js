
// var is actual traitor - cheator
// let is sincere person
// const is just const which will not change.

// VARIABLE - Fn Scoped
var a=10;
console.log(a);
function printHello(){
console.log("Print Hello");
    var a=20;
    console.log(a);

    if(true){
        var a =30;
        console.log(a);
    }
console.log(a);

    
}
printHello();