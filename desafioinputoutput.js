// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
// ============================================================
let lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:

// let cadastro = {
//     nome: lerTeclado.question("Informe o seu nome: "),
//     idade: lerTeclado.questionInt("Informe sua idade: "),
//     cidade: lerTeclado.question("Informe a cidade onde mora: "),
//     profissao: lerTeclado.question("Informe sua profissao: "),
//     gostaDeJs: lerTeclado.keyInYN("Gosta de JavaScript? {S/N}"),
//     comidaFavorita: [
//         lerTeclado.question("Informe a primeira comida que voce mais gosta: "),
//         lerTeclado.question("Informe a segunda comida que voce mais gosta: "),
//         lerTeclado.question("Informe a terceira comida que voce mais gosta: ")
//     ],
//     pessoasComQuemMoro: {
//         pessoa01: lerTeclado.question("Informe o nome da primeira pessoa que mora com voce: "),
//         idade: lerTeclado.questionInt("Informe a idade desta primeira pessoa: "),
//         pessoa02: lerTeclado.question("Informe o nome da segunda pessoa que mora com voce: "),
//         idade: lerTeclado.questionInt("Informe a idade desta segunda pessoa: ")
//     }
// }

// console.table(cadastro)

// console.log(`Nome: ${cadastro.nome}. Idade: ${cadastro.idade} anos. Profissao: ${cadastro.profissao} em ${cadastro.cidade}. Gosta de JS: ${cadastro.gostaDeJs? "Sim" : "Nao"}... `)


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e enderecoCompleto de cada uma).
//    enderecoCompleto deve ser um objeto contendo rua, cidade e estado
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 2º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

// let pessoa01 = {
//     nome: lerTeclado.question("Informe o nome da primeira pessoa: "),
//     idade: lerTeclado.questionInt("Informe a idade da primeira pessoa: "),
//     enderecoCompleto: {
//         rua: lerTeclado.question("Informe o nome da rua: "),
//         cidade: lerTeclado.question("Informe o nome da cidade: "),
//         estado: lerTeclado.question("Informe o estado onde mora: ")
//     }
// }

// let pessoa02 = {
//     nome: lerTeclado.question("Informe o nome da segunda pessoa: "),
//     idade: lerTeclado.questionInt("Informe a idade da segunda pessoa: "),
//     enderecoCompleto: {
//         rua: lerTeclado.question("Informe o nome da rua: "),
//         cidade: lerTeclado.question("Informe o nome da cidade: "),
//         estado: lerTeclado.question("Informe o estado onde mora: ")
//     }
// }

// let amigos = [pessoa01,pessoa02]

// console.table(amigos)

// console.log(amigos[1].nome,amigos[1].idade)
// console.log(amigos[1].enderecoCompleto)
// console.log(amigos[0].nome,amigos[0].enderecoCompleto.rua)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:

// console.info("Um novo pedido acaba de chegar!")
// console.log("================================")
// console.log("              MENU              ")
// console.log("================================")
// console.log("- Entradas")
// console.log("   º - Batatas fritas ")
// console.log("   º - Salame ")
// console.log("- Pratos Principais")
// console.log("   º - Lasanha ")
// console.log("   º - Parmegiana ")
// console.log("   º - Feijoada ")
// console.log("- Sobremesas")
// console.log("   º - Milkshake ")
// console.log("   º - Brigadeiro ")
// console.log("- Bebidas")
// console.log("   º - Cerveja ")
// console.log("   º - Caipirinha ")

// console.log("================================")

// let pedido = {
//     pedidoDeEntrada: lerTeclado.question("Informe qual entrada deseja: "),
//     pratoPrincipal: lerTeclado.question("Informe qual prato principal deseja: "),
//     sobremesa: lerTeclado.question("Informe qual sobremesa deseja: "),
//     bebida: [lerTeclado.question("Informe a bebida desejada: "),
//         lerTeclado.question("Informe a segunda bebida desejada: ")
//     ]

// }

// console.table(pedido)

// console.log(`Seu pedido: Entrada: ${pedido.pedidoDeEntrada}, Prato Principal: ${pedido.pratoPrincipal}, Sobremesa: ${pedido.sobremesa}, Bebida 1: ${pedido.bebida[0]}, Bebida 2: ${pedido.bebida[1]}. Bom apetite!`)





console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:

// let perfil = {
//     apelido: lerTeclado.question("Digite seu apelido: "),
//     jogoFavorito: lerTeclado.question("Digite seu jogo favorito: "),
//     horasTotaisJogadas: lerTeclado.questionInt("Digite quantas horas aproximadamente voce ja jogou: "),
//     jogaEmTime: lerTeclado.keyInYN("Voce joga em time? {S/N}")
// }

// console.table(perfil)
// console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.")

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:

let pessoa01 = {
    nome: lerTeclado.question("Informe o nome da primeira pessoa: "),
    cidadeFavorita: lerTeclado.question("Informe o nome da sua cidade favorita: ")
}

let pessoa02 = {
    nome: lerTeclado.question("Informe o nome da segunda pessoa: "),
    cidadeFavorita: lerTeclado.question("Informe o nome da sua cidade favorita: ")
}

let pessoa03 = {
    nome: lerTeclado.question("Informe o nome da terceira pessoa: "),
    cidadeFavorita: lerTeclado.question("Informe o nome da sua cidade favorita: ")
}

console.table(pessoa02)

let viajantes = [pessoa01,pessoa02,pessoa03]

console.table(viajantes)

console.info(viajantes.length)
console.log(viajantes[1].cidadeFavorita)
console.log(viajantes[0].nome)

console.log("_______________________________");
