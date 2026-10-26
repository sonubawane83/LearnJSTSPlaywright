
//String Conversion and Immutability


// Convert other types to a string
(200).toString(); // "200"
true.toString();  // "true"

// Convert a string to a number

Number("42");        // 42
parseInt("42px");    // 42   (reads the number, ignores "px")
parseFloat("3.14rem"); // 3.14

//Strings are immutable: you cannot change a single character in place. 
// Trying to do so is silently ignored.

let str = "hello";
str[0] = "H";     // ignored, strings cannot be edited in place
console.log(str); // "hello"
let upper = str.toUpperCase();
console.log(str);   // "hello"  (original unchanged)
console.log(upper); // "HELLO"  (a new string)

