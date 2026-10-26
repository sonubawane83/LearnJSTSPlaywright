
function getStatuscode(status){
    if(status >=200 && status <300){
        return "Success";
    } else if (status >=400 && status < 500){
        return "client Error";
    }else if(status >=500){
        return "Server Error";
    }else{
        console.log("Unknown error");
    }
}

console.log(getStatuscode(200));
console.log(getStatuscode(404));
console.log(getStatuscode(505));
