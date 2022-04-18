/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

const notaAluno1 = 89
const notaAluno2 = 38

function avaliacao(nota){
    let result = 0
    let resultFinal = 0
    if (nota < 0 , nota > 100){
        console.log("Insira um valor valido")
        return;
    }
    else if (nota < 38){
        console.log('Reprovado')
    }
    else if (nota % 5 === 3){
        result = nota % 5
        resultFinal = nota + result -1
        return resultFinal
        }
    else if (nota % 5 === 4){
        result = nota % 5
        resultFinal = nota + result -3
        return resultFinal
        }
    else return nota
     return resultFinal   
    }


console.log(avaliacao(notaAluno1))
console.log(avaliacao(notaAluno2))

//Solucao da lista 

/*function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
*/