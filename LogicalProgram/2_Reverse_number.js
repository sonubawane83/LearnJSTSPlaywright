
// Reverse a Number 

function revNumber(num){
    let rev=0;

    while(num > 0){  // 1234 > >0 T 
        let lastdigit = num % 10; // 1234/10=4 // 123/10=3 //12/10=2 //1/10=1
        rev = rev *10 + lastdigit; // 4*10+0=40 // 4*10+3=43 // 43*10+2=430+2 =432
        num = Math.floor(num/10); // 4321
    }

    return rev;

}

console.log(revNumber(1234)); // 4321   // 40 
