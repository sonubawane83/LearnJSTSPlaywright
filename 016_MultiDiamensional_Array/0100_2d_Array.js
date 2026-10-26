
let score =[   // column 
    [85,90,78],  // row  
    [60,45,70],  // row 
    [95,88,92]   // row 
];

// sum of the value 
let rowsums = score.map(row => row.reduce((a,b)=>a+b,0));
console.log(rowsums); //[ 253, 175, 275 ]