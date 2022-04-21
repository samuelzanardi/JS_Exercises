/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

const array1 = [1,5,3,6]
const array2 = ["kek","eke","kekw","ekwk"]
const array3 = [0.5,0.8,1.9,12.5]

const arrayConcat1 = array1.concat(array2,array3)
console.log(arrayConcat1)

function unir(...arrays) {
    let result = []
    for(let i = 0; i < arrays.length; i++){
        result = result.concat(arrays[i])
    }
    return console.log(result)
}
unir(array1,array2,array3)

//soluçao da lista
/* let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString)) */

