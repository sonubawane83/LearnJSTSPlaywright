/*
score = 0 to 100
score > 90 -> A
Score 80 to 90 -> B
Score 70 to 80 -> C
Score 60 to 70 -> D
Score 50 to 60 -> E
Score <50 -> F : Fail
use if, else if and else 

    91-100 : A : Excellent
    81-90  : B : Very Good 
    71-80  : C : Good
    61-70  : D : Average
    50-60  : E : Needs improvement
    0-49   : F : Fail 
    if the score is less than 0 or greater than 100 : Invalid Score 

*/
/// Asked in Interview  ///

let score =95;

if (score >100 || score<0){
    console.log("Invalid");
}else{

if(score >90){
    console.log(" A Excellent");
 
}else if(score >=80 && score <=90){
    console.log("B Very good");

}else if(score >=70 && score <=80)
{
    console.log("C Good");
}else if(score >=60 && score <=70)
{
    console.log("D Average");
}else if(score >=50 && score <=60)
{
    console.log("E : Needs improvement");
}
else{
    console.log("Fail");
}

}




