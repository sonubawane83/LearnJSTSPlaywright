class APIClients{

    constructor(baseURL){
        this.baseURL = baseURL;
    }


get (path){
return this.baseURL + path;
}
}

let staging = new APIClients("https://staging.api.com");
let api = new APIClients("https://prod.api.com");

console.log(staging.get("/user.com"));
console.log(staging.get("/prod.com"));