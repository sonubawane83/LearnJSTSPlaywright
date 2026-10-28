class Animal{
    constructor(name){
        this.name=name;
    }

    eating(){
        console.log("Eating a food");
        
    }
}


class Dog extends Animal{
    constructor(name,bread){
        super(name);
        this.bread= bread;
    }

    bark(){
       super.eating(); // function can call
    console.log(this.name, "is braking");
    
    }
}

let t1 = new Dog("Rex","Labradog");
console.log(t1.name);
t1.eating();
console.log(t1.bark());