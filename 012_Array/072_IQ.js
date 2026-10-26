
let arr = [1,2,3];
let copy =arr; // copyed it is reference copy and deep array [ referece is copy will not modified the original value ]
copy.push(10);
console.log(arr.length); // print 4 

///// 
let browsers =["chrome","firefox","edge"];

console.log(browsers.length); // 3
console.log(browsers);  //["chrome","firefox","edge"]

let removed = browsers.pop(2);
console.log(removed); // edge
console.log(browsers); // [ 'chrome', 'firefox' ]

let removed1st = browsers.shift(1);
console.log(removed1st); // chrome
console.log(browsers); // [ 'firefox' ]


