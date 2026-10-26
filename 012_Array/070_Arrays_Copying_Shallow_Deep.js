// shallow copy dont change the original value 

let original = [1,2,3];  // it is original value 

let copy1 = [...original]; //[ 1, 2, 3 ]
//console.log(copy1);

let copy2 = original.slice(); //[ 1, 2, 3 ]
//console.log(copy2);

let copy3 = Array.from(original);
//console.log(copy3);

let copy4 = original.concat();
console.log(copy4);

// the above arrays give the same Answer  // [1,2,3] having 4 ways to print 

copy1.push(99);  // 
console.log(original);  // [1,2,3] original will print  
console.log(copy1); // [1,2,3,,99] will print 

// Deep copy means original value will also change and use with JSON
original.push(88);
console.log(original);
console.log(copy1);// it is alreeady change with 99 
// Value copyied will not modified the aaray 









