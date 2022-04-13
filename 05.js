/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. 
Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */
console.log(0.1 + 0.2)
//PODERIA TER USADO .REPLACE 
function conversor(v1){
    let result = v1.toFixed(2)
     toString(result)
     let resultArray = Array.from(result)

     const dot = (i) => i === "."
     let indexOfDot = resultArray.findIndex(dot)

     resultArray[indexOfDot] = ","

    return console.log(`R$${resultArray.join("")}`)
}
conversor(0.30000000000000004)

/* soluçao da lista    .REPLACE

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2) 
*/