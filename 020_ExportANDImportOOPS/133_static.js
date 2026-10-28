// static 

// Static is belong to the class 
class TestRunner {

    static totalTest = 0;
    static passcount = 0;

    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTest++;  // classname.static
        if (passed) {
            TestRunner.passcount++;
        }

    }
non_static_display(){ // Non static Method
    return this.name;
}

static summary(){ // function can also be static and no need to write a object in it 
    // without creating an Object classname.staticfunction 
    return TestRunner.passcount +"/" + TestRunner.totalTest + "Passed" ;
}

}

let t1 = new TestRunner("Login", true);
let t2 = new TestRunner("Signup", false);
let t3 = new TestRunner("cart",true);
let t4 = new TestRunner("checkout",true);
console.log(TestRunner.summary());
