
let isCI = true; // continues integration environment is true or false
let browserMode = isCI ? "headless" : "headed";
console.log(browserMode, "mode"); // headless will be printed because isCI is true