/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos*/

function pa(n,a1,r){
    let result = a1
    let i = 1
    let soma = 0
    do {
        console.log(`a${i} = ${result}`)
        soma += result 
        result += r
        i++
    }
    while (i - 1 < n)
    console.log(`Soma = ${soma}`)
}

function pg(n,a1,r){
    let result = a1
    let i = 1
    let soma = 0
    do {
        console.log(`a${i} = ${result}`)
        soma += result
        result *= r
        i++
    }
    while (i - 1 < n)
    console.log(`Soma = ${soma}`)
}
pa(5,2,3)
pg(6,1,2)

//soluçao da lista

/*  function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3) */