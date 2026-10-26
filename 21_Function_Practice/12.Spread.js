
function hasError(...codes){
    return codes.some(c=>c=40);
}

let responseCodes = [200, 201, 404];
hasError(...responseCodes);