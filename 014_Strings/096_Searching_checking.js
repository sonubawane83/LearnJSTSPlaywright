
// Searching and Checking of an String 

let url = "https://staging.vwo.com/api/login?retry=true";


// includes() —> is the text present? returns true/false

console.log(url.includes("staging"));//true
console.log(url.includes("production")); // false

// startsWith / endsWith return true / False
console.log(url.startsWith("https"));
console.log(url.endsWith("true"));

// indexOf / lastIndexOf — position of the text, or -1 if missing
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere")); // -1

// search() accepts a regular expression and returns the index
console.log(url.search(/login/));