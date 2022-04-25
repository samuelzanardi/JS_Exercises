/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

function troca(v1,v2){
    if(v1.length !== v2.length){
        console.log("insira vetores de tamanhos iguais")
    }
    else {
        for(let i =0; i < v2.length; i++){
            v1[i] = v1[i] + v2[i]
            v2[i] = v1[i] - v2 [i]
            v1[i] = v1[i] - v2[i]
        }
    }
    console.log('Novo vetor 1: ' + v1)
    console.log('Novo vetor 2: ' + v2)
}

let arra1 =[5,2,3,4,5]
let array2 = [5,4,3,2,1] 
troca(arra1,array2)

//soluçao da lista 
/* function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)*/