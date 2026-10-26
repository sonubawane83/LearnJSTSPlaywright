
let apicall = new Promise(function(resolve,reject){
    reject({status:"500 error"})
});

// call now 

apicall.then(function(data){
    console.log(data.status);
    
}).catch(function(error){
console.log(error);

});

// .catch() runs ONLy when the Promise is rejected 
// .then will skiped in this case 