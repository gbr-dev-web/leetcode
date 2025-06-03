/**
 * 
 * Dado um array de inteiros numsordenado em ordem crescente , remova as duplicatas no local, de forma que cada elemento único apareça apenas uma vez . A ordem relativa dos elementos deve ser mantida . Em seguida, retorne o número de elementos únicos emnums .

Considere o número de elementos exclusivos de nums, kpara ser aceito, você precisa fazer o seguinte:

Altere a matriz nums de forma que os primeiros k elementos de nums contenham os elementos únicos na ordem em que estavam presentes nums inicialmente. Os elementos restantes de nums não são importantes, assim como o tamanho de nums.
Retornar k.
Juiz Aduaneiro:

O juiz testará sua solução com o seguinte código:

int[] nums = [...]; // Matriz de entrada
int[] expectedNums = [...]; // A resposta esperada com o comprimento correto

int k = removeDuplicates(nums); // Chama sua implementação

afirmar k == expectedNums.length;
para (int i = 0; i < k; i++) {
    afirmar nums[i] == expectedNums[i];
}
Se todas as afirmações forem aprovadas, sua solução será aceita .

 

Exemplo 1:

Entrada: nums = [1,1,2]
 Saída: 2, nums = [1,2,_]
 Explicação: Sua função deve retornar k = 2, com os dois primeiros elementos de nums sendo 1 e 2, respectivamente.
Não importa o que você deixar além do k retornado (por isso são sublinhados).
Exemplo 2:

Entrada: nums = [0,0,1,1,1,2,2,3,3,4]
 Saída: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 Explicação: Sua função deve retornar k = 5, com os cinco primeiros elementos de nums sendo 0, 1, 2, 3 e 4, respectivamente.
Não importa o que você deixar além do k retornado (por isso são sublinhados).
 

Restrições:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
numsé classificado em ordem não decrescente .

 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--
    }
  }
  return nums.length
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// caso o proximo item seja igual ao atual remove o proximo item, caso nao ele passa para o proximo item e repete isso ate acabar o array e no fim retorna o array.length
