/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/
const alunos = [{
        cod: 0,
        nome: "samuel",
        nota1: 9,
        nota2: 7,
        nota3: 6,
        media: 0
},{
        cod: 1,
        nome: "kek",
        nota1: 5,
        nota2: 8,
        nota3: 3,
        media: 0
},{
        cod: 2,
        nome: "kekw",
        nota1: 5,
        nota2: 8,
        nota3: 7,
        media: 0
}]

function aluno(aluno){
    let alunoMedia = 0
    for(let i = alunos.length -1; i > -1; i--){

        alunoMedia = media(aluno[i].nota1, aluno[i].nota2, aluno[i].nota3)
        aluno[i].media = alunoMedia
        if (aluno[i].media < 5){
            console.log(`${aluno[i].cod} : ${aluno[i].nome} => Reprovado : ${aluno[i].nota1}, ${aluno[i].nota2}, ${aluno[i].nota3}, Media: ${aluno[i].media}`)
        }
        else  console.log(`${aluno[i].cod} : ${aluno[i].nome} => Aprovado : ${aluno[i].nota1}, ${aluno[i].nota2}, ${aluno[i].nota3}, Media: ${aluno[i].media}`)
}
}

function media(nota1,nota2,nota3){
    let n1 = 0
    let n2 = 0
    let n3 = 0
    let media = 0

    if (nota1 >= nota2 && nota1 >= nota3){
       n1 = nota1 * 4
       n2 = nota2 * 3
       n3 = nota3 * 3
       media = (n1+n2+n3) / 10
    }
    else if (nota2 >= nota1 && nota2 >= nota3){
        n1 = nota1 * 3
        n2 = nota2 * 4
        n3 = nota3 * 3
        media = (n1+n2+n3) / 10
    }
    else if (nota3 >= nota1 && nota3 >= nota2){
        n1 = nota1 * 3
        n2 = nota2 * 3
        n3 = nota3 * 4
        media = (n1+n2+n3) / 10
    }
    return media
}
aluno(alunos)

//Soluçao da lista

/* function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5) */