// right pyramid pattern with javascript 

/*
pyramid star pattern 

*
* *
* * *


// 3 columns 
// 3 rows 
*/
let n =3;
for(let i = 0; i<=n ; i++){
    let row =" ";
    for(let j = 1; j<=i; j++){
        row = row + "*";
    
    }
    console.log(row.trim());
}