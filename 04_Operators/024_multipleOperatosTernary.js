
let statuscode=404;
let category = statuscode<300? "Sucess" : statuscode <400? "Redirect" : statuscode <500?"Client Error" :"Server Error";

console.log(`status ${statuscode}:${category}`);

