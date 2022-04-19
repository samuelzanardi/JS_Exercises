/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function comparacao(alt1, tx1, alt2, tx2){
    let altura1 = alt1
    let altura2 = alt2
    let tempo = 0
    if (alt1 > alt2 && tx1 < tx2){
        while(altura1 >= altura2){
            altura1 += tx1
            altura2 += tx2
            tempo++
        }
         console.log(`A criança de altura ${alt2}cm é menor, porem irá ultrapassar a outra em ${tempo} anos `) 
    }
    else if (alt2 >= alt1 && tx2 < tx1){
        while(altura2 > altura1){
            altura1 += tx1
            altura2 += tx2
            tempo++
        }
        console.log(`A criança de altura ${alt1}cm é menor, porem irá ultrapassar a outra em ${tempo} anos `) 
    }
    else if (alt1 > alt2 && tx1 >= tx2 || alt1 >= alt2 && tx1 > tx2){
        console.log(`A criança de altura ${alt2}cm é menor, e nao ultrapassará a outra`) 
        }
    else if (alt2 > alt1 && tx2 >= tx1 || alt2 >= alt1 && tx2 > tx1){
         console.log(`A criança de altura ${alt1}cm é menor, e nao ultrapassará a outra`) 
        }
    }
comparacao(130, 14, 130, 15)
