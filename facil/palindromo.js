/**
 * Dado um inteiro x, retorne truese xfor umpalíndromo, e falsede outra forma .

 

Exemplo 1:

Entrada: x = 121
 Saída: verdadeiro
 Explicação: 121 é lido como 121 da esquerda para a direita e da direita para a esquerda.
Exemplo 2:

Entrada: x = -121
 Saída: falso
 Explicação: Da esquerda para a direita, lê-se -121. Da direita para a esquerda, torna-se 121-. Portanto, não é um palíndromo.
Exemplo 3:

Entrada: x = 10
 Saída: falso
 Explicação: Lê 01 da direita para a esquerda. Portanto, não é um palíndromo.
 

Restrições:

-231 <= x <= 231 - 1
 

Acompanhamento: Você conseguiria resolver isso sem converter o inteiro em uma string?
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){ return false}
    const array = Array.from(String(x), Number);

    let exec = (array.length % 2 !== 0 )? (array.length - 1) / 2 : array.length

    if(array.length == 1){ return true }

    for(let i = 0; i < exec; i++){
        let a = array[i]
        let b = array[(array.length - 1) - i]
        if(a !== b) { return false }
    }
    return true
};

console.log(isPalindrome(42222322224))