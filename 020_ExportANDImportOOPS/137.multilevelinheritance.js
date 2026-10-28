// Grandfather > father >son 
// Basepage > AuthPage > Admin Page 

class BasePage{
    constructor(name){
        this.name= name;
    }
    openpage(){
        console.log("[OPEN]" + this.name);
        
    }
}

class Authpage extends BasePage{

login(user){
    console.log("[LOGIN"+user);
    
}

}
class AdminPage extends Authpage{

    constructor(){
        super("Admin Pannel");
    }

    manageruser(){
        console.log("[Admin]");
        
    }
}

let t1 = new AdminPage();
t1.openpage();
t1.login("sggdhs");
t1.manageruser();
