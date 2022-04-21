/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function comparacao(alt1, tx1, alt2, tx2){
    let altura1 = alt1
    let altura2 = alt2
    let tempo = 0
    let v = ""
    if (alt1 >= alt2 && tx1 < tx2){
        while(altura1 >= altura2){
            altura1 += tx1
            altura2 += tx2
            tempo++
        }
        if (alt2 < alt1 ){
            v = " é menor"
        }
        else v = "tem a mesma altura da outra"
        
         console.log(`A segunda criança de altura : ${alt2}cm ${v}, porem irá ultrapassar a outra em ${tempo} anos `) 
    }

    else if (alt2 >= alt1 && tx2 < tx1){
        while(altura2 > altura1){
            altura1 += tx1
            altura2 += tx2
            tempo++
        }
        if (alt2 > alt1 ){
            v = " é menor"
        }
        else v = "tem a mesma altura da outra"

        console.log(`A primeira criança de altura : ${alt1}cm ${v}, porem irá ultrapassar a outra em ${tempo} anos `)
    }

    else if (alt1 > alt2 && tx1 >= tx2 || alt1 >= alt2 && tx1 > tx2){
        if (alt2 < alt1 ){
            v = " é menor"
        }
        else v = "tem a mesma altura da outra"
        console.log(`A segunda criança de altura : ${alt2}cm ${v}, e nao ultrapassará a outra`) 
        }

    else if (alt2 > alt1 && tx2 >= tx1 || alt2 >= alt1 && tx2 > tx1){
        if (alt2 > alt1 ){
            v = " é menor"
        }
        else v = "tem a mesma altura da outra"
         console.log(`A promeira criança de altura : ${alt1}cm ${v}, e nao ultrapassará a outra`) 
        }
    else console.log(`As crianças tem a mesma altura e taxa de crescimento`)
    }
comparacao(120, 15, 130, 15)

//soluçao da lista 

/* function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 4, 150, 4));
 */

