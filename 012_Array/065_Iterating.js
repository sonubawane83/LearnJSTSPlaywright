// Iterating - Go from One to Another 

// use of for loop
let tests = ["Login","checkout","search"];

for(let i=0; i<tests.length; i++){
    console.log(tests[i]);
}
console.log("=========");


//Use of for...of (cleanest for value )

for(let x of tests){
    console.log(x); // value gives
}

console.log("=========");

// forEach (no return value )
tests.forEach((test,index)=>{
    console.log(`$(index): $(test)`);

});

console.log("=====")

// entries() -> index value 

for(let [i,test] of tests.entries()){
    console.log(i,test);
}

// in operator 

let 