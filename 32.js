/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

const array1 = [2,8,9,10,3]

function mediaAritimetica(array){
    let media = 0
    for(let i = 0; i < array.length; i++){
        media += array[i]
    }
    return media/ array.length
}
console.log(mediaAritimetica(array1))

// soluçao da lista

/* function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor)) */