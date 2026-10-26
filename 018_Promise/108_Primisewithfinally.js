let testrun = new Promise(function(resolve,reject){
let apicall =true;
if(apicall){
    resolve({"status":"true"});

}else{
    reject("Assertion Error");
}

});

//call the APi 
testrun.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
    
}).finally(function(){  
    console.log("I will be executd Always");
    
});
//finally will executed always 