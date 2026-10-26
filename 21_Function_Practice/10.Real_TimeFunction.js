// 3 ways to call and function 

// 1st way 

function validateStatusCode(status){
if(status >=200 && status <=300){
    console.log("Request is fine!");
    
}
}

// 2nd Way 

const validateStatusCode_expression =function (status){
if(status >=200 && status <=300){
    console.log("Request is fine!");
    
}
}

// Arrow function 
const validateStatusCode_Arrow =(status)=>{
if(status >=200 && status <=300){
    console.log("Request is fine!");
    
}
}

validateStatusCode(200);
validateStatusCode_expression(200);
validateStatusCode_Arrow(200);