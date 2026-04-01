// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================

let lerTeclado = require('readline-sync')

// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

let jogador = {
    nome: "",
    pontos: 0
}

jogador.nome = lerTeclado.question("Digite seu nick para iniciar o quiz: ")

console.log(`\nOla jogador ${jogador.nome}, o jogo tera algumas questoes onde existe apenas uma alternativa correta, a cada acerto sera acrescentado 1 ponto na sua pontuacao geral, Boa sorte!`)

console.log(`a) Qual e a maior cidade do jogo Tibia?`)
console.log(1 ,"Darashia")
console.log(2 ,"Venore")
console.log(3 ,"Thais")
console.log(4 ,"Svargrond")

let respostaA = lerTeclado.questionInt("Digite o numero que representa sua escolha: ")

switch (respostaA){
    case 1: 
        console.log("Errado! A resposta certa era a opção 3.")
        break;
    case 2: 
        console.log("Errado! A resposta certa era a opção 3.")
        break;
    case 3:
        console.log("Correto!")
        jogador.pontos += 1
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 3.")
        break;    
    default:
        console.log("Opcao invalida, nenhum ponto atribuido.")
}

console.log(`\nb) Qual o nome do evento que da XP em dobro?`)
console.log(1 ,"Maxima XP")
console.log(2 ,"Super XP")
console.log(3 ,"XP boost")
console.log(4 ,"Double XP")

let respostaB = lerTeclado.questionInt("Digite o numero que representa sua escolha: ")

switch (respostaB){
    case 1: 
        console.log("Errado! A resposta certa era a opção 4.")
        break;
    case 2: 
        console.log("Errado! A resposta certa era a opção 4.")
        break;
    case 3:
        console.log("Errado! A resposta certa era a opção 4.")
        break;
    case 4:
        console.log("Correto!")
        jogador.pontos += 1
        break;    
    default:
        console.log("Opcao invalida, nenhum ponto atribuido.")
}

console.log(`\nc) Qual o nome do primeiro player a pegar level 1000 no jogo?`)
console.log(1 ,"Kharsek")
console.log(2 ,"Goraca")
console.log(3 ,"Vinicin Invicto")
console.log(4 ,"Black the Legend")

let respostaC = lerTeclado.questionInt("Digite o numero que representa sua escolha: ")

switch (respostaC){
    case 1: 
        console.log("Correto!")
        jogador.pontos += 1
        break;
    case 2: 
        console.log("Errado! A resposta certa era a opção 1.")
        break;
    case 3:
        console.log("Errado! A resposta certa era a opção 1.")
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 1.")
        break;    
    default:
        console.log("Opcao invalida, nenhum ponto atribuido.")
}

console.log(`\nd) Qual o nome do boss da quest Rotten Blood?`)
console.log(1 ,"Scarlet")
console.log(2 ,"Bakragore")
console.log(3 ,"Megalomania")
console.log(4 ,"RootKraken")

let respostaD = lerTeclado.questionInt("Digite o numero que representa sua escolha: ")

switch (respostaD){
    case 1: 
        console.log("Errado! A resposta certa era a opção 2.")
        break;
    case 2: 
        console.log("Correto!")
        jogador.pontos += 1
        break;
    case 3:
        console.log("Errado! A resposta certa era a opção 2.")
        break;
    case 4:
        console.log("Errado! A resposta certa era a opção 2.")
        break;    
    default:
        console.log("Opcao invalida, nenhum ponto atribuido.")
}

console.log(`\ne) Qual o nome da empresa que fundou o jogo Tibia?`)
console.log(1 ,"Microsoft")
console.log(2 ,"Tesla")
console.log(3 ,"WEG")
console.log(4 ,"Cipsoft")

let respostaE = lerTeclado.questionInt("Digite o numero que representa sua escolha: ")

switch (respostaE){
    case 1: 
        console.log("Errado! A resposta certa era a opção 4.")
        break;
    case 2: 
        console.log("Errado! A resposta certa era a opção 4.")
        break;
    case 3:
        console.log("Errado! A resposta certa era a opção 4.")
        break;
    case 4:
        console.log("Correto!")
        jogador.pontos += 1
        break;    
    default:
        console.log("Opcao invalida, nenhum ponto atribuido.")
}

console.log(`\n${jogador.nome} a sua pontuacao foi: ${jogador.pontos} pontos.`)

let classificacao;

if(jogador.pontos === 5){
    classificacao = "Perfeito! Você é um expert!"    
}else if(jogador.pontos === 4){
    classificacao = "Muito bem! Quase lá!"
}else if(jogador.pontos === 3){
    classificacao = "Bom trabalho, mas pode melhorar."
}else if(jogador.pontos === 2 || jogador.pontos === 1){
    classificacao = "Nheee!"
}else{
    classificacao = "VIX, tente novamente!"    
}




let resultado  = {
    jogador: jogador.nome,
    pontosT: jogador.pontos,
    aprovado: ""
}

if(jogador.pontos >= 3){
    resultado.aprovado = "Aprovado"    
}else{
    resultado.aprovado = "Reprovado"
}


console.table(resultado)

console.log("\n========== GABARITO ==========")
console.log(`Questao letra a | sua resposta foi: ${respostaA} | Resposta correta: 3 `)
console.log(`Questao letra b | sua resposta foi: ${respostaB} | Resposta correta: 4 `)
console.log(`Questao letra c | sua resposta foi: ${respostaC} | Resposta correta: 1 `)
console.log(`Questao letra d | sua resposta foi: ${respostaD} | Resposta correta: 2 `)
console.log(`Questao letra e | sua resposta foi: ${respostaE} | Resposta correta: 4 `)


