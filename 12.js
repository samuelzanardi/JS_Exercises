/*12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(num){
    result = num
    for(let i = num - 1 ; i > 1; i--){
        result =+ result * i 
    }
     return console.log(result)
}

fatorial(4)

//Soluçao da lista
/*
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
*/