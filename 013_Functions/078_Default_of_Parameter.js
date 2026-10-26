
// Default Parameters


function retry (testName , maxretries =3, delay =1000){  // default Parameter 3 and 1000
    console.log(`Retrying ${testName} up to ${maxretries}, ${delay}`);
}

retry("Login"); // Retrying Login up to 3, 1000
retry("checkout",2); // Retrying checkout up to 2, 1000
retry("API test", 2,500); // Retrying API test up to 2, 500