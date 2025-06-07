/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function strStr(haystack, needle) {
  if (!haystack.includes(needle)) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    const substringCandidate = haystack.slice(i, i + needle.length);
    if (substringCandidate === needle) {
      return i;
    }
  }

  return -1;
}

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
