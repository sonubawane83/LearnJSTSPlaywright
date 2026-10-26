// Array transforming : we can manupulate the Array reduce the array or tranformthe array , expand the array
let score =[45,82,91,60,73];

//map : check each and every element and return array value 
let grades = score.map(s => s>70 ? "Pass":"Fail");
console.log(grades);
// 45> 70 F , 82>70 T , 91<70 T ,60>70 F, 73>70 T 

//filter : reduce the value filter out the value 

let passing = score.filter(s=> s>=70);
console.log(passing); // 82,92,73 is greater than 70 

// reduce : accumulate the single value 
let total = score.reduce((sum,s)=> sum + s,0);
console.log(total); // total sum

