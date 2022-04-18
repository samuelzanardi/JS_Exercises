/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/


function equacao(a, b, c){
    let delta = (b * b) - 4 * a *c
    if (Math.sign(delta) === -1){
        console.log("Delta é negativo")
        return;
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
     if (b === 0){
        return console.log(`X1 = ${x1.toFixed(3)}, X2 = ${x2.toFixed(3)}`)
    }
    else return console.log(`X1 = ${x1}, X2 = ${x2}`)
}
equacao(2,0,-14)

//Soluçao da lista

/*
function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(2, 0, -12))
console.log(bhaskara(3, 1, 2))
*/