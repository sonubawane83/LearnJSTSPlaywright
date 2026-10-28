function buildEndpoint(base:string, path:string):string{
    return base+path;
}

function isSuccessCode(code: number):boolean{
    return code >=200 && code<300;
}

function logtestStep(step:string):void{
console.log("[STEP ]"+ step);
}

console.log(buildEndpoint("https://api.com","/users"));
console.log("200 is success:", isSuccessCode(200));
console.log("403 is success:", isSuccessCode(404));
logtestStep("Navigate to login Page");