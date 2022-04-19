/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos).*/

function anuidade(mes,valor){
    let juros = 0
    switch (mes) {
        case 1:
            juros = valor * 1.05 ** 12
            break;
        case 2:
            juros = valor * 1.05 ** 11
            break;

        case 3:
            juros = valor * 1.05 ** 10
            break;

        case 4:
            juros = valor * 1.05 ** 9
            break;
        case 5:
            juros = valor * 1.05 ** 8
            break;
        case 6:
            juros = valor * 1.05 ** 7
            break;

        case 7:
            juros = valor * 1.05 ** 6
            break;

        case 8:
            juros = valor * 1.05 ** 5
            break;
        case 9:
            juros = valor * 1.05 ** 4
            break;

        case 10:
            juros = valor * 1.05 ** 3
            break;

        case 11:
            juros = valor * 1.05 ** 2
            break;
        case 12:
            juros = valor * 1.05 
            break;

        default: 
        console.log("Insira um mês valido")
            break;
            
    }
    return juros.toFixed(2)
}
console.log(anuidade(13,1000))

//Solução da lista

/*
function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(12, 1000))
*/

