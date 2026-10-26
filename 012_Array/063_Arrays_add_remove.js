let arr=[1,2,3];


// Add from END 
arr.push(4);
console.log(arr); // 1,2,3,4
// you can push multiple elements 

// Remove from END 
arr.pop(4);
console.log(arr); // 1,2,3 

// ADD at the BEGINING 
arr.unshift(0);
console.log(arr);

// Remove at the BEGINING 
arr.shift(0);
console.log(arr);


// splice (start , deleteCount, .... itemsToAdd)
arr.splice(2,1); // remove 1 iteam ar index 2 
console.log(arr);

arr.splice(2,0,99);
console.log(arr); //[ 1, 2, 99 ]   // 0 is not deletion // 1 means 1 delete 


arr.splice(2,2,10,20); // add 1 element 2 numbers should add 10,20   // 2 is index and 2 is element remove . 10,20 i value need to add at end 
console.log(arr);


//Real ex of browser 

let browser =["chrome","firefox","Safari","opera"];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);
console.log("=======================");

let removed = browser.shift();
console.log(removed);
console.log("=======================");


for(let i=0; i < browser.length; i++){
console.log(browser[i]);
if(browser[i]==="opera")
{
console.log("Opera is removed from Selenium");
}
}