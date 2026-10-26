
/*
const : constant
for values that should not change 
const is blocked scoped, but it cannot be ressigned and cannot be redeclared.
It must be iniitialized at the time of declaration.

This is the default choice for the SDET - > test URl's , config value, locators, expected Results, anything
that should remain fixed throughout the test.


*/

const URL = "www.google.com";
//const URL = "www.google.com"; // redeclaretion is not possible 
URL = "https:test.com";//TypeError: Assignment to constant variable. ressigned is not possible 



 