/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

const array1 = [9,7,11,20,21,15,10]

function filtrar(array) {
    let dentro = 0
    const novoArray = []
    for(let i = 0 ; i < array.length; i++){
        if(array[i] >= 10 && array[i] <= 20){
            novoArray.push(array[i])
        }
    }
    return console.log(`O array tem ${novoArray.length} elementos dentro do intervalo e ${array.length - novoArray.length} elementos fora.`)
}
filtrar(array1)


function filtro(array){
    const arrayNovo = array.filter(elemento => elemento >=10 && elemento <=20)
    return console.log(`O array tem ${arrayNovo.length} elementos dentro do intervalo e ${array.length - arrayNovo.length} elementos fora.`)
}
filtro(array1)

//soluçao da lista 

/* function observarIntervalo (vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosNoIntervalo++
        }
    }
    return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor)) */