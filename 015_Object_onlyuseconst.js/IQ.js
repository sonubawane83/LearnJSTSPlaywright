
const obj ={a:1,b:2,c:3};

// find Keys 
console.log(Object.keys(obj));

//find value 
console.log(Object.values(obj)); // Object is an interface

// find key value pair use enteries
console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ] in the form of array 

// How to iterate 
const user = {name:"john", age:30};
for(const key in user){
console.log(`${key}: ${user[key]}`);
}

// 
