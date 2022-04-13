/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capInicial,juros,tempo){
    const result = capInicial * juros
    let montanteFinal = result * tempo + capInicial
    let lucro = result * tempo
    return console.log("montante Final : ",montanteFinal , "lucro : ", lucro)
}

function jurosCompostos(capInicial,juros,tempo){
    let montanteFinal = 0
    let lucro = 0
    if (tempo > 1){
    let result = capInicial * juros + capInicial
        for(let i = 2; i <= tempo; i++) {
            result = result  * juros + result 
            montanteFinal = result
            lucro = result - capInicial
        }

    }
     else if(tempo === 1 ){
        let result = capInicial * juros + capInicial
            montanteFinal = result
            lucro = result - capInicial

     }
     else if (tempo === 0){
     montanteFinal = capInicial
     lucro = result - capInicial
     }
     return console.log(`montante Final : R$${montanteFinal} Lucro : R$${lucro}`)

}

jurosCompostos(10000,0.2,3)
jurosSimples(32000,0.02,4)


/* Soluçao da lista **

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));