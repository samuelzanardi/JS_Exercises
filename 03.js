//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function potencia(base,expoente){
    let result = base
    for(let i = 2; i <= expoente; i++){
        result = result * base
    }
    return console.log(result)
}
potencia(2,6)



function potencia2(base,expoente){
    let result = base
    let i = 0 
    do {
        result = result * base
        i++
    }
    while(i <= expoente)

    return console.log(result)
}
potencia(5,4)

/* soluçao da lista : (:

    function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))
*/