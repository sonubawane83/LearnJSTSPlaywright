//Character frequency

//Count how many times each character appears

function countCharacter(str){
const counts={};
for(const ch of str){
counts[ch] =(counts[ch] || 0)+1;
}
return counts;

}
console.log(countCharacter("aabbgh"));
