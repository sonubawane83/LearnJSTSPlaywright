
//aeiou
function countaVowels(str){
let count =0;
for(const ch of str.toLowerCase()){
if("aeiou".includes(ch)) count++;
}
return count;

}
console.log(countaVowels("Playwright"));
