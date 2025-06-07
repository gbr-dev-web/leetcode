/**
 * 
 *  

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedString = s.trim() // remove espaços em branco

    let n = 0

    for (let c = trimmedString.length - 1; c >= 0; c--) {
        if(trimmedString[c] === ' ') return n
        n++
    }
    return n
};

console.log(lengthOfLastWord("moon"))

