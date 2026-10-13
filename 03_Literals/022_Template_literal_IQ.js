
// replace the Value 
let responsetime =850;
let sla =1000;
let slaStatus= responsetime <=sla ? "within SLA" : " SLA Breached"; 
// slaStatus : within SLA
console.log(`Response: ${responsetime}ms - ${slaStatus}`);
console.log(`WHat is the SLA? - ${slaStatus}`) // replace the Value 
// Response: 850ms - within SLA



// Template Literal is used to replace the Value 
let condition = true;
let isSKFemale = condition? "True":"Fale";
console.log(`Value is ,${isSKFemale}`);


