let order = new Promise(function(resolved, reject){
    let foodready = true;
    if(foodready){
        resolved("pizza is delevired");
    }else{
        reject("due to rain ordered cancel");
    }
})

console.log(order);

// Promise is an Object that represents the Value that will be used later. it is Like Ordering food 
// You will get the Promise food will come and it will either resolved or reject 
// A Promise is always in one of three states: Pending, fulfullied , or rejected 
