
// rest of Parameter 
function logResults(suiteName, ...results) {

    console.log(`Suite: ${suiteName}`);

    console.log(`Results: ${results.join(", ")}`);

}

logResults("Auth Suite", "pass", "fail", "pass", "skip");

// Results: pass, fail, pass, skip

// Spread Parameter 

function add(a, b, c) {

    return a + b + c;

}

let num = [1, 2, 3];

add(...num); // 6

function hasError(...codes) {

    return codes.some(c => c >= 400);

}

let responseCodes = [200, 201, 404];

hasError(...responseCodes); // true

