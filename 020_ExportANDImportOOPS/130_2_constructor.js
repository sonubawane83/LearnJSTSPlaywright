class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
console.log(name +" Lanuched");

    }
    startBrowser(){
        console.log("Browser is start");
        
    }
    closeBrowser(){
        console.log("Browser is closed");
        
    }
}

let chrome = new Browser("Chrome"); //Chrome Lanuched
let firefox = new Browser("FireFox"); // FireFox Launched
console.log(chrome.isOpen);  // true
