/**
Dado um conjunto de inteiros nums e um inteiro target, retorne os índices dos dois números de forma que a soma deles sejatarget .

Você pode assumir que cada entrada terá exatamente uma solução e não pode usar o mesmo elemento duas vezes.

Você pode retornar a resposta em qualquer ordem.

 

Exemplo 1:

Entrada: nums = [2,7,11,15], alvo = 9
 Saída: [0,1]
 Explicação: Como nums[0] + nums[1] == 9, retornamos [0, 1].
Exemplo 2:

Entrada: nums = [3,2,4], alvo = 6
 Saída: [1,2]
Exemplo 3:

Entrada: nums = [3,3], alvo = 6
 Saída: [0,1]
 
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let mapa = {};

    for (let i = 0; i < nums.length; i++) {
        let complemento = target - nums[i];

        if (mapa.hasOwnProperty(complemento)) {
            return [mapa[complemento], i];
        }

        mapa[nums[i]] = i;
    }
};


console.log(twoSum([3,2,4], 6))