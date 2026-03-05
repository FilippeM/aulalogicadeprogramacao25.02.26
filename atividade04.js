// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:

let aluno = {
    nome: "Dimitri",
    idade: 38,
    curso: "Engenharia de Software",
}

console.log(aluno.nome)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:

aluno.endereco = ["Jaraguá do Sul", "Rua Manoel Joaquim"]
console.log(aluno.endereco[0])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:

aluno.habilidades = ["Jogar futebol", "Criar planilhas", "Editar videos"]
console.log(aluno.habilidades[0])


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:

aluno.notas = [4, 8, 9.5]
console.log(`O aluno ${aluno.nome} obteve as notas ${aluno.notas} no 2º semestre.`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:

aluno.responsavel = {
    nome: "Julie",
    parentesco: "mãe",
}

console.log(aluno.responsavel.nome)
aluno.responsavel.nome = "Luigi"
console.log(aluno.responsavel.nome)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:

let listaDeAlunos = [aluno] //array criada
let aluno01 = {
    nome: "Fernanda",
    idade: 30,
    curso: "Nutrição"
}
let aluno02 = {
    nome: "Maria",
    idade: 25,
    curso: "Educação Física"
} // 2 objetos criados com dados de outros alunos

listaDeAlunos.push(aluno01)
listaDeAlunos.push(aluno02)

console.log(listaDeAlunos[1])



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:

let aluno03 = {
    nome: "João",
    idade: 16,
    notas: [7, 8, 6] 
}
let aluno04 = {
    nome: "Ana",
    idade: 17,
    notas: [6, 8, 9] 
}
let aluno05 = {
    nome: "Pedro",
    idade: 15,
    notas: [7, 7, 6] 
}

let listaDeAlunos02 = [aluno03, aluno04, aluno05]

console.log(`O aluno(a) ${aluno03.nome} obteve as notas ${aluno03.notas}`)
console.log(`O aluno(a) ${aluno04.nome} obteve as notas ${aluno04.notas}`)
console.log(`O aluno(a) ${aluno05.nome} obteve as notas ${aluno05.notas}`)

console.log("_______________________________");
