/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const array1 = [20,2,23,-4,-35,64,80,-1,5,-7] 

function negativo(array){
    
    const negativos = array.filter(elemento => Math.sign(elemento) === -1)
    console.log(negativos.length)
    }
negativo(array1)

//soluçao da lista

/*function numerosNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor)) */
