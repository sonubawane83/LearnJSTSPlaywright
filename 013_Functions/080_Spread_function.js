
//Spread Function use in Automation 


function hasError(...codeerror){
    return codeerror.some(c=> c >=400);
}
let responseCode = [200,300,404];
console.log(hasError(...responseCode)); // True