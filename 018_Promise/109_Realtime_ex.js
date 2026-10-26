function openBrower(){
    return new Promise(function(resolved)
    {
        resolved("Brower is opned");
    });
}

function gotoLoginPage(){
    return new Promise(function(resolved){
        resolved("Login Page is Load");
    });
}

function enterCredential(){
    return new Promise(function(resolved){
        resolved("Enter the Credential Successfully");
    });
}
function clickOnLoginbutton(){
    return new Promise(function(resolve){
        resolve("Click on Login Button");
    });
}

openBrower().then(function(msg){
    console.log("Successfully Open the Browser",msg);
    return openBrower();
}).then(function(msg){
    console.log("Navigate to Login Page", msg);
    return gotoLoginPage();
    
}).then(function(msg){
    console.log("Enter Credential Successfully",msg);
    return enterCredential();
    
}).then(function(msg){
    console.log("click on login button", msg);
    return clickOnLoginbutton();
    
}).catch(function(error){
console.log("Error:", error);

}).finally(function(){
    console.log("Done the execution");
    
});
   
//🟩 Promise Chaining (Real Login Flow)
//Each .then() can return another promise, and the next .then() waits for it.
//  This chains steps in a clean, top-to-bottom order and replaces callback hell.
// This will not used in Automation 