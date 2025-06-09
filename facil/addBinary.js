/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = BigInt('0b'+a)+BigInt('0b'+b) // converte pra decimal e soma os valores
    return sum.toString(2) // converte pra binario os valores somados
};

console.log(addBinary("11", "1"));
console.log(addBinary("1011", "1011"));
