/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e impprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function ajuste(plano, salario){
    switch (plano){
        case 'a' : console.log(`Novo Salario : ${salario * 1.1}`)
            break

        case 'b' : console.log(`Novo Salario : ${salario * 1.15}`)
            break

        case 'c' : console.log(`Novo Salario : ${salario * 1.2}`)
            break
        
        default : console.log("Plano invalido")
    }
}
ajuste('d',1200)

//Solução da lista

/*
function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
*/