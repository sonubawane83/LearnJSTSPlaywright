

// open a Browser , CLick on Login Page, credential enter, Click on Login Button 
function openBrowser() {
    return new Promise(function (resolved) {
        resolved("Browser is Opened ")
    });
}

function clickonLogin() {
    return new Promise(function (resolved) {
        resolved("Click on Login");
    });
}

function enterThecredential() {
    return new Promise(function (resolved) {
        resolved("Credential is entered ");
    });
}

/* 

openBrowser().then(function(msg){
    console.log("Open a Browser successfully");
    return openBrowser();
    
}).then(function(msg){
    console.log("click on login");
    return clickonLogin
    
}).then(function(msg){
    console.log("enter the credential");
    return enterThecredential();
    
}).catch(function(error){
    console.log("Error ", error);
    
}).finally(function(){
    console.log("Finally block executed");
    
})
    */

async function step1() {

    try {
        const msg1 = await openBrowser();
        console.log(msg1);
        const msg2 = await clickonLogin();
        console.log(msg2);
        const msg3 = await enterThecredential
        console.log(msg3);


    } catch (error) {
        console.log("error");


    } finally {
        console.log("Finally block executed");
    }
}
step1();