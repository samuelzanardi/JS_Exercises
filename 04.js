/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function resto(v1,v2){
    result = v1 / v2
    sobra = v1 %= v2
    return console.log(`O resultado da divisão é : ${result}, o resto : ${sobra}`)
}
resto(26,4)

/* soluçao da lista

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)

*/