/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

const array1 = [10,2,3,5,6,8,9,10,46,80,58,50]

function maiorElemento(array){
    let maior = array[0]
    let menor = array[0]
    for(let i = 0; i < array.length; i++){
        if (maior <= array[i]){
            maior = array[i]
        }
        if (menor >= array[i]){
            menor = array[i]
        }
    }
    return console.log(`O maior elemento do array é ${maior}, e o menor é ${menor}`)
}

maiorElemento(array1)

//soluçao da lista

/* function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor)) */