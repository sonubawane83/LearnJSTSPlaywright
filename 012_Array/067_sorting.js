
// Sorting 

let fruits =["graps","cherry","banana","apple"];
fruits.sort();
console.log(fruits); // alphanumric character will print // sort alphanumeric string on the basis of 1st letter 
//output : [ 'apple', 'banana', 'cherry', 'graps' ]


// sorting of number 

let nums = [10,1,21,2];
nums.sort();
console.log(nums); // sorting will not work 

nums.sort((a,b)=> a-b);  // ((a,b)=> is 2 digits to compare , a-b =10-1=9)
console.log(nums);//[ 1, 2, 10, 21 ] Ascending order  
nums.sort((a,b)=>b-a);
console.log(nums); //[ 21, 10, 2, 1 ] Desending order  


// 