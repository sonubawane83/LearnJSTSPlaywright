// Reverse a String by using loop 
function reverseString(str){
    let rev ="";

    for(let i= str.length-1; i>=0; i--){ // 5 length 
        rev = rev+ str[i];          

    }
    return rev;
}


console.log(reverseString("Hello")); // olleH
console.log(reverseString("Javascript"));

