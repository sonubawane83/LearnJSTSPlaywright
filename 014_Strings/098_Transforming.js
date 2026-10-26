
//Transforming Strings

//These methods return a new string. The original never changes (strings are immutable).

let str = "  Hello, World!  ";
console.log(str.toUpperCase()); // "  HELLO, WORLD!  "
console.log(str.toLowerCase()); // "  hello, world!  "

// Trim removes spaces from the edges

console.log(str.trim());   // "Hello, World!"
str.trimStart();
str.trimEnd();

// Replace text

let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS");    // only the FIRST match
msg.replaceAll("FAIL", "PASS"); // every match
msg.replace(/FAIL/g, "PASS");   // every match using a regex (g = global)


// Join text together

"Hello" + " " + "World";      // "Hello World"
"Hello".concat(" ", "World"); // "Hello World"
`${"Hello"} ${"World"}`;      // "Hello World"


// Splitting and joining

"pass,fail,skip".split(",");            // ["pass", "fail", "skip"]

"hello".split("");                      // ["h","e","l","l","o"]

"test_login_pass".split("_").join(" "); // "test login pass"

let parts = ["2024", "03", "07"];

let date = parts.join("-");

console.log(date); // "2024-03-07"

//split turns a string into an array, and join turns an array back into a string. 
// They are a great pair.