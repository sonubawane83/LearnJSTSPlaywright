//Three ways to call a call back 

function print(){
    console.log("It is Normal Function")
    
}

function placeHolder(clipboard,sonucallback){
    console.log("Hi Your Order is Placed");
    sonucallback();
    
}

// First way to call
 placeHolder("Pizza",print);

 // Second Way to call with Anonymoue function , function name is not given 

 placeHolder("Burger",function (){
    console.log("Anonymous function without Name")
 });

 //Third way to call call back  used in Automation playwright 
  placeHolder("Pasta",() => {
    console.log("Arrow  function without function and Name ")
 });
