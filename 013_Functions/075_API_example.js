
// Arrow Function  1st way
const validatedTStuscode_arrow = (status1) => {
    if (status1 >= 200 && status1 <= 300) {
        console.log("Result is fined");
    }
}


// 2nd way without arrow function only function is used 
function validatedTStuscode_function(status1) {
    if (status1 >= 200 && status1 <= 300) {
        console.log("Result is fined@@");
    }

}

// 3rd with const and function 
const validatedTStuscode_exp = function (status1) {
    if (status1 >= 200 && status1 <= 300) {
        console.log("Result is fined!!!");
    }

};

validatedTStuscode_arrow(200);
validatedTStuscode_function(200);
validatedTStuscode_exp(200);

