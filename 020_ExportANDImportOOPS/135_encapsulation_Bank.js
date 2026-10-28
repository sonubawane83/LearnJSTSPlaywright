
class ICICI {
    #balance; // private 

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance // Private

    }


    getBalance() {
        return this.#balance;
    }

    setBalance(balance, iscasher) {
        if (iscasher) {
            this.#balance = balance;
        } else {
            console.log("Not Allowed ");

        }
    }
}

let t4 = new ICICI("sonu",1000);
console.log(t4.getBalance());

t4.setBalance(50000,false);
console.log(t4.getBalance());
