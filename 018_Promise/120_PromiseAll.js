/*
Promise.all runs many promises at the same time and waits for all of them. 
If even one rejects, the whole thing rejects immediately.

*/

let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCatch = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCatch]).then(function (result) {
    console.log("All check Result", result);  //["Auth Ok", "DB OK", "Cache OK"] print in Array 

});

// If one rejects, .catch() runs and the others' results are lost
Promise.all([
    Promise.resolve("ok"),
    Promise.reject("DB Down"),
    Promise.resolve("cache Okay")

]).then(function (r) {
    console.log(r);

}).catch(function (error) {
    console.log("Failed", error); //Failed DB Down

})