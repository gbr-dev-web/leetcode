/**
Dada uma string scontendo apenas os caracteres '(', ')', '{', '}', '['e ']', determine se a string de entrada é válida.

Uma string de entrada é válida se:

Os colchetes abertos devem ser fechados pelo mesmo tipo de colchetes.
Os colchetes abertos devem ser fechados na ordem correta.
Cada colchete fechado tem um colchete aberto correspondente do mesmo tipo.
 
Exemplo 1:

Entrada: s = "()"

Saída: verdadeiro

Exemplo 2:

Entrada: s = "()[]{}"

Saída: verdadeiro

Exemplo 3:

Entrada: s = "(]"

Saída: falso

Exemplo 4:

Entrada: s = "([])"

Saída: verdadeiro

 

Restrições:

1 <= s.length <= 104
sconsiste apenas em parênteses '()[]{}'.
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    if(s[0] === ')' || s[0] === ']' || s[0] === '}') return false
    if(s.length % 2 !== 0) return false 

    const chars = {
        '(': 0, ')': 1,
        '[': 3, ']': 4,
        '{': 6, '}': 7,
    }

    // verifica se cada caracter do string existe no objeto
    for (const i of s) { if (!chars.hasOwnProperty(i)) return false; }

    const arr = s.split('')

    for (let i = 1; i < arr.length; i++) {
        const past = arr[i - 1]
        const isEqual = chars[arr[i]] === chars[past] + 1
        if(isEqual){
            arr.splice(i - 1, 2); // remove os elementos passado e atual
            i -= 2; // ajusta o índice para não pular elementos após remoção
        }
    } 
  
    return arr.length === 0 ? true : false;
};

console.log(isValid('([{})'))
