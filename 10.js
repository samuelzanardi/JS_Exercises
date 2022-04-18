/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false */

function divisivelPor3(num){
    if(num % 3 === 0){
        return true
    }
    else return false
}

console.log(divisivelPor3(18))

//Soluçao da lista

/*function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))*/