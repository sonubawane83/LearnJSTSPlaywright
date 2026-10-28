class Car {
 
    #engine; // Private  // get method

    constructor(name, enginename) {
        this.name = name;
        this.#engine = enginename
    }


    getengine() {
        return this.#engine;
    }


    setengine(nameofengine) {
return this.#engine = nameofengine;

    }
}

let ft = new Car("Tesla","V8");
console.log(ft.getengine());

console.log(ft.setengine("Update from V8 to V90"));

console.log(ft.getengine());