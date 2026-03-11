// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================
let lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:


console.log("Iniciando o programa...")
console.info("A atividade atual é referente a entrada e saída de dados.")
console.warn("ATENÇÃO: Sempre inicie a saída de dados com node e o nome do arquivo EX: node warn.js")
console.error("ERROR 404")





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:

// const nomeDoUsuario = lerTeclado.question("Digite seu nome: ")
// let idade = lerTeclado.questionInt("Informe sua idade: ")
// console.log(`Olá, ${nomeDoUsuario}! Você tem ${idade} anos.`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

// const nomeDoUsuario00 = lerTeclado.question("Digite seu nome: ")
// let idadeUsuario = lerTeclado.questionInt("Informe sua idade: ")
// let cidade = lerTeclado.question("Informe sua cidade: ")
// let ficha = {
//     nome: nomeDoUsuario00,
//     idade:idadeUsuario,
//     cidade: cidade
// }

// console.table(ficha)

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:

// let disponibilidade = lerTeclado.keyInYN("Voce tem disponibilidade para estudar? {S/N} ")
// let localReside = lerTeclado.keyInYN("Voce reside em Jaragua do Sul? {S/N}  ")

// console.log(`${disponibilidade ? "Sim" : "Não"},tenho disponibilidade para estudar.`)
// console.log(`${localReside ? "Sim" : "Nao"} resido em Jaragua do Sul`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

// console.log("Me informe 3 comidas favoritas")
// let comida01 = lerTeclado.question("Digite a primeira comida: ")
// let comida02 = lerTeclado.question("Digite a segunda comida: ")
// let comida03 = lerTeclado.question("Digite a terceira comida: ")

// let comidasFavoritas = [comida01,comida02,comida03]

// console.table(comidasFavoritas)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:

// let nomeDoUsuario01 = lerTeclado.question("Digite seu nome: ")
// let profissao = lerTeclado.question("Informe a sua profissao:")
// let cidade00 = lerTeclado.question("Informe sua cidade:")

// let cadastroPessoal = {
//     nomeDoUsuario01,
//     profissao,
//     cidade00
// }

// console.log(`Me chamo ${cadastroPessoal.nomeDoUsuario01}. Profissao: ${cadastroPessoal.profissao} e moro na cidade: ${cadastroPessoal.cidade00}.`)
// console.table(cadastroPessoal)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

// let usuarioFicticio01 = {
//     nome: lerTeclado.question("Informe seu nome: "),
//     idade: lerTeclado.questionInt("Informe sua idade: "),
//     endereco: {
//         cidade: lerTeclado.question("Informe sua cidade: "),
//         rua: lerTeclado.question("Informe sua rua: "),
//         numero: lerTeclado.questionInt("Informe o numero da casa: ")
//     }
// }
// let usuarioFicticio02 = {
//         nome: lerTeclado.question("Informe seu nome: "),
//         idade: lerTeclado.questionInt("Informe sua idade: "),
//         endereco: {
//             cidade: lerTeclado.question("Informe sua cidade: "),
//             rua: lerTeclado.question("Informe sua rua: "),
//             numero: lerTeclado.questionInt("Informe o numero da casa: ")
//         }
// }
// let usuarioFicticio03 = {
//             nome: lerTeclado.question("Informe seu nome: "),
//             idade: lerTeclado.questionInt("Informe sua idade: "),
//             endereco: {
//                 cidade: lerTeclado.question("Informe sua cidade: "),
//                 rua: lerTeclado.question("Informe sua rua: "),
//                 numero: lerTeclado.questionInt("Informe o numero da casa: ")
//             }
// }

// let listaDeUsuarios = [usuarioFicticio01,usuarioFicticio02,usuarioFicticio03]

// console.table(listaDeUsuarios)

// console.log(listaDeUsuarios[1].nome,listaDeUsuarios[1].idade)
// console.log(listaDeUsuarios[2].endereco)
// console.log(listaDeUsuarios[0].nome,listaDeUsuarios[0].endereco.rua)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:

// let aluno01 = {
//     nome: lerTeclado.question("Informe o nome do primeiro aluno: "),
//     notas: [lerTeclado.questionInt("Informe a primeira nota: "),lerTeclado.questionInt("Informe a segunda nota: "),lerTeclado.questionInt("Informe a terceira nota: ")]
// }
// let aluno02 = {
//     nome: lerTeclado.question("Informe o nome do segundo aluno: "),
//     notas: [lerTeclado.questionInt("Informe a primeira nota: "),lerTeclado.questionInt("Informe a segunda nota: "),lerTeclado.questionInt("Informe a terceira nota: ")]
// }
// let aluno03 = {
//     nome: lerTeclado.question("Informe o nome do terceiro aluno: "),
//     notas: [lerTeclado.questionInt("Informe a primeira nota: "),lerTeclado.questionInt("Informe a segunda nota: "),lerTeclado.questionInt("Informe a terceira nota: ")]
// }

// let turma = [aluno01,aluno02,aluno03]

// console.table(turma)

// console.log(turma[1].nome,turma[1].notas[0])
// console.log(turma[2].nome,turma[2].notas[1])
// console.log(turma[0].nome,turma[0].notas[2])



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:

// let nomedoproduto = lerTeclado.question("Informe o nome do produto: ")
// let categoriaproduto = lerTeclado.question("Informe a categoria do produto: ")
// let preco = lerTeclado.questionFloat("Informe o preco do produto: ")
// let qtdEmEstoque = lerTeclado.questionInt("Informe a quantidade do produto: ")
// let disponibilidadeVenda = lerTeclado.keyInYN("O produto esta disponivel para venda? {S/N}")

// let produto = {
//     nome: nomedoproduto,
//     categoria: categoriaproduto,
//     preco: preco,
//     quantidade: qtdEmEstoque,
//     disponivel: disponibilidadeVenda
// }

// console.table(produto)

// console.log(`Produto: ${produto.nome} | Categoria: ${produto.categoria} | Estoque: ${produto.quantidade} UN`)

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

// let medicamento01 = {
//     nome: lerTeclado.question("Informe o nome do primeiro medicamento: "),
//     preco: lerTeclado.questionFloat("Informe o preco do medicamento: "),
//     emEstoque: lerTeclado.keyInYN("Ha medicamento no estoque? {S/N}")

// }

// let medicamento02 = {
//     nome: lerTeclado.question("Informe o nome do segundo medicamento: "),
//     preco: lerTeclado.questionFloat("Informe o preco do medicamento: "),
//     emEstoque: lerTeclado.keyInYN("Ha medicamento no estoque? {S/N}")

// }

// let estoqueFarmacia = [medicamento01,medicamento02]

// console.table(estoqueFarmacia)

// console.log(estoqueFarmacia[1].nome,estoqueFarmacia[1].preco)
// console.log(estoqueFarmacia[0].nome,estoqueFarmacia[0].emEstoque)
