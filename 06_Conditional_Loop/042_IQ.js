
// Use break with Switch Statement if not used then after one all the defination will execute 
// API Swithc example 


let responsecode = 404;

switch(responsecode){

    case 200:
    console.log("200 Ok"); 
    break;

   case 404:
   console.log("404 Not found");
   break;
  
   default:
   console.log("not status code match");
}

