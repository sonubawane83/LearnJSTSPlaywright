// Real time used with Test Data you need to check in Automation 

let suittest =[ 
    ["login-pass", "register-pass", "logout-pass"],   // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],      // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"] // Payment suite
];

for(let i=0; i<suittest.length; i++){  // nested loop
    for(let j =0; j<suittest[i].length;j++){  //  
       if(suittest[i][j].includes("fail")){ // condition 
        console.log(suittest[i][j]);

       } 
    }
}
/* output 
filter-fail
checkout-fail
payment-fail
*/