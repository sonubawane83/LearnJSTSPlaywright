/// never 
// // function infiniteLoop():never{
// //    while{true}{
    
// //    }
// }
// never- function never return (throws or infinite loop)
// never retrun data type 
// whenever we known there is data type then never is used [ never we are returning ]
// void is empty [ no return]

function throwError(message:string):never{
    throw new Error(message);
}
