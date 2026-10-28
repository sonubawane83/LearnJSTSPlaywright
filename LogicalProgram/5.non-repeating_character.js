//First non-repeating character
//Question: Return the first character that appears once

function nonrepeatingchar(str) {
    const count = {};

    for (const ch of str) count[ch] = (count[ch] || 0) + 1;
    for (const ch of str) 
        {
        if (count[ch] === 1)
            return ch;
        }
    return null;

}

console.log(nonrepeatingchar("aabbc"));