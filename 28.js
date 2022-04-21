/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

const array1 = [0,1,2,3,4,5,6,7,8,9,10]

function pares(array){
    let par = 0
    let impar = 0
    const novoArray = array.filter(a => a % 2 === 0)
    par = novoArray.length
    impar = array.length - novoArray.length

    return console.log(`o array tem ${par} numeros pares e ${impar} numeros impares`)
    }
pares(array1)

//suluçao da lista

/* function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor) */
