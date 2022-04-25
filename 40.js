/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

function classificacao(v){
    
    for (let i =0 ;i< v.length; i++){
        if(v[i] < 0 || v[i] > 10){
            console.log("nota invalida")
        }
        else if(v[i] >= 0 && v[i]< 4.9){
            console.log(`Nota ${i+1} : D`)
        }
        else if(v[i] <= 6.9){
            console.log(`Nota ${i+1} : C`)
        }
        else if(v[i] <= 8.9){
            console.log(`Nota ${i+1} : B`)
        }
        else if(v[i] <= 10){
            console.log(`Nota ${i+1} : A`)
        }
    }
}
const arra1 = [10,5.8,7,9,8.9] 
classificacao(arra1)

//soluçao da lista 

/* function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos) */