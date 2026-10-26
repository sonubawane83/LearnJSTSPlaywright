// clousers 

/*


*/

function outer(){
    let message ="hello";
     console.log("Outer called");
    function inner(){
        console.log(message);

    } 
    return inner;       // you can return the function of inner 
}



//outer ();  //Outer called
//inner(); //ReferenceError: inner is not defined

let fn_inner = outer();
fn_inner();

