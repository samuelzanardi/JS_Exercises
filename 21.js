/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

function planoSaude(idade){
    let tabela = tabelaIdade(idade)
    let result = 100
    switch (tabela){
        case 'tabela1' : result +=  80
            break
        case 'tabela2' : result +=  50
            break
        case 'tabela3' : result +=  95
            break
        case 'tabela4' : result +=  130
            break
        default : return "insira um valor valido"
    }
     return result
}

function tabelaIdade(idade){
    if (idade < 10){
        return 'tabela1'
    }
    else if (idade > 10 && idade < 30){
        return 'tabela2'
    }
    else if (idade > 30 && idade <= 60){
        return 'tabela3'
    }
    else if (idade > 60 ){
        return 'tabela4'
    }
}
console.log(planoSaude(9))
console.log(planoSaude(29))
console.log(planoSaude(59))
console.log(planoSaude(61))
console.log(planoSaude('a'))


//Solução da lista 

/* function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80)); */