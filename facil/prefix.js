/**
 * 
 * Escreva uma função para encontrar a maior string de prefixo comum entre uma matriz de strings.

Se não houver um prefixo comum, retorne uma string vazia "".

 

Exemplo 1:

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Restrições:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i]consiste apenas em letras minúsculas do inglês se não estiver vazio.

 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    // ordem crescente do item pro menor tamanho ate o menor
    strs.sort((a, b) => a.length - b.length); 
    let current = []
    let response = '';
    // se move de acordo com a letra atual do primeiro elemento de srts
    for (let i = 0; i < strs[0].length; i++) {
        // se move entre os indices do array strs
        for (let j = 1; j < strs.length; j++) {
            current = strs[j][i]
            const past = strs[j - 1][i]
            const isDifferent = current !== past;
            if (isDifferent) { return response }
        }
        response += current
    }
    return response;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))