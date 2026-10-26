// API 
let apicallback = new Promise(function(resolve, reject){
    resolve({status : 200, body :"User Body"})
});

apicallback.then(function(response){
    console.log(response.status);
    
});

// .then() runs ONLy when the Promise resolves Successfully. 