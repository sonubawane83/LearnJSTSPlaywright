

var testName ="LoginTest";
var testName = "Signup Test";
var testName = "Search test";  // Re-decleration is allowing in var // 
console.log(testName); //Search test last one print 


//  let testName2 ="LoginTest";
//  let testName2 = "Signup Test";
//  let testName2= "Search test";  // SyntaxError: Identifier 'testName' has already been declare Error
//  console.log(testName2); //No print  // no re-decleration in case of let 


let testName1 ="LoginTest";
 testName1 = "Signup Test"; // reassignment in case of let 
 testName1 = "Search test";  
console.log(testName1);  // Search test


/* 

 const testName4 ="LoginTest";
 const testName4 = "Signup Test";
 const testName4= "Search test";  // SyntaxError: Identifier 'testName4' has already been declared
 console.log(testName4); //No print  // no re-decleration in case of let 
*/

const testName3 ="LoginTest";
 testName3 = "Signup Test";
 testName3 = "Search test";   //No print  // no assignment in case of let 
console.log(testName3);  // TypeError: Assignment to constant variable.