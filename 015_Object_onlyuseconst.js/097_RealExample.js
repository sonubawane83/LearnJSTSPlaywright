let config ={};

config.browser ="chrome";   // this is Key and Value pair also 
config.timeot = 3000;
config.testname ="LoginTest";

/*
let config ={  // In this way also key and Value Pair 

browser ="chrome";   // this is Key and Value pair also 
timeot = 3000;
testname ="LoginTest";

};

*/
console.log(config);

if(config.browser==="chrome"){
    console.log("will be execute my TC")
}