

//false condition check strict check    
let environment ="staging";
let baseUrl = environment === "prod" ? "https://api.example.com" :  "https://staging-api.examplecom";
console.log(baseUrl); // statging url will be printed because environment is not prod 
// when there is Single line then ternary operator is used 
// If multiple Line then if else condition is used 