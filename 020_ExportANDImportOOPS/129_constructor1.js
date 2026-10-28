
class TestCase {

    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;

    }

    display() {
        console.log(this.name + " -> " + this.status + " -> " + this.priority);

    }
}
let logintest_ref = new TestCase("Login Test", "pass", "Po");
//console.log(logintest_ref); {} this form print
logintest_ref.display();

let signIntest_ref = new TestCase("SignUp Test", "Fail", "P1");
//console.log(signIntest_ref);

signIntest_ref.display();

