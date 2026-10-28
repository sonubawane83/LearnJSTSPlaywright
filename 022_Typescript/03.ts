//
/*
remember
ts-node -> compile and run it (compiled file will not be shown to you)
tsc HelloWorld.ts --ignoreConfig -> compiled file is created, it will not run the code 
ignoreconfig : temprory ignoring this 

*/
// Primitive types  data types 
let name :string ="john";

let age:number =90;
//let pi:number = 3.14;
let distance:number = 2345432894588543;
let isActive:boolean = true;
let nothing :null = null;
let noDefined:undefined = undefined;

//Arrays
let numbers: number[] = [1,2,3];
let names: Array<string> = ["john","Jane"];


//Any (avoid when possible)
let anything:any ="hello"; // it becomes String // aviod using this 


// unknown (safer than any)
let unknown: unknown = "hello"; // aviod using this 

let message: string ="Hello,Typescript!";
let count: number =42;

console.log("Meaasage",message);
console.log("Count",count);
console.log("Is Active",isActive);



