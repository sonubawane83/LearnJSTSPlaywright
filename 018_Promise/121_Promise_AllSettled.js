
// Promise.allSettled also runs everything in parallel, 
// but it waits for every promise to finish and reports each result,
//  whether it passed or failed. This is exactly what a test report needs.


Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Passed"),
    Promise.resolve("Test C Passed")

]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);


    });

});

//Each result has a status of "fulfilled" or "rejected", 
//with the value in r.value or the error in r.reason.
// If you want to  consildated of All the Promises this concept is used 

