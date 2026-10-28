//Polymorphisam 
/*
when we have object w
1. compile time Poy is not supperted in Java script Method overloaindg 
2. Run Time polymorphisam Method Overriding is supported in Javascript 


*/
class BaseTest{
    setup(){
        console.log("Base Page");
    }
}

class APIPage extends BaseTest{
    setup(){
        console.log("API test");
        
    }
}

let test = new APIPage();
test.setup(); // current class will call 

// Object behave differently in case of Method Overriding 