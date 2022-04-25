/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function mult(vetor,int){
    const resultado = []
    vetor.forEach(elemento => {
        resultado.push(elemento * int)
    })
    return console.log(resultado)
}

function multMaior(vetor,int){
    const resultado = []
    vetor.forEach(elemento => {
        if (elemento > 5){
            resultado.push(elemento * int)
        }
        else return;
    })
    return console.log(resultado)
}


const array1 = [2,5,9,18,4,6]
multMaior(array1,2)
mult(array1,2)

/* soluçao da lista */

/*let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3)) */