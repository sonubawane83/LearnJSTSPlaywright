
let a = { status: "pass" };// combination of Key and Value Pair 
console.log(a.status); // pass 

let b = a;
b.status = "Fail";

console.log(a.status); // Fail
console.log(b.status); // Fail 

// Object into Object 

const user = { name1: "john", age: 30, city: "NYC" };

const data = {
    user: {
        name1: "john",
        address:
        {
            city: "NYC"
        }

    }
};
const{user:{address:{city}}}= data;
console.log(data.user); //{ name1: 'john', address: { city: 'NYC' } }
console.log(data.user.address.city);


