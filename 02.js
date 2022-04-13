/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function medidas(v1,v2,v3){
    if (v1 == v2 && v1 == v3){
        console.log(`O triangulo é Equilátero todos seus lados são iguais : ${v1} , ${v2} e ${v3}`)
    }
    else if (v1 == v2 && v1 != v3){
        console.log(`O triangulo é Isósceles tem dois lados iguais : ${v1} , ${v2} e ${v3}`)
    }
    else if (v1 == v3 && v1 != v2){
        console.log(`O triangulo é Isósceles tem dois lados iguais : ${v1} , ${v2} e ${v3}`)
    }
    else if (v2 == v3 && v2 != v1){
        console.log(`O triangulo é Isósceles tem dois lados iguais : ${v1} , ${v2} e ${v3}`)
    }
    else if (v2 != v1 && v2 == v3){
        console.log(`O triangulo é Isósceles tem dois lados iguais : ${v1} , ${v2} e ${v3}`)
    }
    else if (v1 != v2 && v2 != v3){
        console.log(`O triangulo é Escaleno todos lados tem medidas diferentes : ${v1} , ${v2} e ${v3}`)
    }

}
medidas(3,2,3)

/* soluçao da lista :

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}
console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));
*/