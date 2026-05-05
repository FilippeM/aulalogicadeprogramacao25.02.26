// ============================================================
//   ATIVIDADE 10 – Estruturas de Controle (Repetição - While)
// ============================================================

let lerTeclado = require('readline-sync')
// ------------------------------------------------------------
// EXERCÍCIO 1 – While simples
// ------------------------------------------------------------
// a) Declare uma variável 'n' com valor 1.
// b) Usando while, exiba os números de 1 a 7 no console.
// c) Ao final, exiba: "Fim da contagem!"

// → Seu código aqui:

// let valor = 1

// while(valor < 8){
//     console.log(valor);    
//     valor++;
// }

// console.log("Fim da contagem!");



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem regressiva
// ------------------------------------------------------------
// a) Declare uma variável 'regressiva' com valor 10.
// b) Usando while, exiba a contagem de 10 até 1.
// c) Ao final, exiba: "Lançamento ON!"

// → Seu código aqui:

// let regressiva = 10

// while(regressiva > 0){
//     console.log(regressiva);
//     regressiva--;    
// }

// console.log("Lancamento ON!");


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Validação de entrada
// ------------------------------------------------------------
// a) Usando while, peça ao usuário um número entre 1 e 5 e repita enquanto o valor for inválido.
//    A cada entrada inválida, exiba: "Valor fora do intervalo. Tente novamente."
// b) Quando o valor for válido, exiba: "Você escolheu: <número>"

// → Seu código aqui:

// let numero = lerTeclado.questionInt("Digite um numero entre 1 e 5: ")

// while(numero < 1 || numero > 5){
//     numero = lerTeclado.questionInt("Numero Invalido | Digite um numero entre 1 e 5: ");
// }

// console.log(`Você escolheu: ${numero}`);




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Acumulador com while
// ------------------------------------------------------------
// a) Usando while, peça ao usuário números até que ele digite 0.
// b) Acumule a soma de todos os números digitados.
// c) Conte quantos números foram digitados (exceto o 0).
// d) Ao final, exiba a soma, a quantidade de numeros digitados e quais foram os números digitados.

// → Seu código aqui:

// let numero = null
// let soma = 0
// let cont = 0
// let totalNumeros = []

// while(numero !== 0){
//     numero = lerTeclado.questionInt("Digite um numero: ")
//     soma += numero    
//     totalNumeros.push(numero);
//     if(numero !== 0){
//         cont++
//     }
// }

// console.log(`SOMA: ${soma}`);
// console.log(`QUANTIDADE DE NUMEROS DIGITADOS: ${cont}`);
// console.table(totalNumeros)



// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Média com while e validação
// ------------------------------------------------------------
// a) Usando while, peça ao usuário notas de 0 a 10 até que ele digite -1 para encerrar.
//    Se a nota for inválida (< 0 e diferente de -1, ou > 10), exiba: "Nota inválida." e peça novamente.
// b) Calcule e exiba a média.

// → Seu código aqui:

// let notas = []
// let nota = null
// let media;
// let somaNotas = 0

// while(nota !== -1 ){
//     nota = lerTeclado.questionFloat("Digite a nota: ");
//     if((nota <= 0 && nota !== -1) || nota > 10){
//         console.log("\nNota invalida\n");
//         nota = lerTeclado.questionFloat("Digite a nota: ");
//     }else {
//         notas.push(nota);
//     }
// }

// notas.pop()

// for(let i  = 0; i < notas.length; i++){
//     somaNotas += notas[i];
// }


// media = somaNotas / notas.length;

// console.log(`\nA media do aluno é: ${media.toFixed(1)}\n`);






console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Do...while: menu simples
// ------------------------------------------------------------
// a) Usando do...while, exiba um menu repetitivo:
//    1 – Exibir hora atual  (use: new Date().toLocaleTimeString())
//    2 – Exibir data atual  (use: new Date().toLocaleDateString())
//    0 – Sair
// b) Processe a opção com switch/case.
// c) O menu deve repetir até o usuário escolher 0.

// → Seu código aqui:

// let opcao = null
// let qtdCoins = 0
// let opcaoContasPremmium = null

// do{
// const hora = new Date().toLocaleTimeString();
// const data = new Date().toLocaleDateString();
// console.log(`
// =============== MENU ===============
// 1 - Comprar Coins
// 2 - Contas Premmium
// 3 - Chave Pix
// 4 - Referencias
// 5 - Falar com atendente
// 0 - Sair

// Horario: ${hora} Data: ${data}
// \n `);

// opcao = lerTeclado.questionInt("Digite a opcao desejada: ");

// switch(opcao){
//     case 1:
//         qtdCoins = lerTeclado.questionInt("\nQuantos coins deseja comprar: ");
//         break;
//     case 2:
//         console.log("\n1 CONTA PLATINUM");
//         console.log("2 CONTA GOLD");
//         console.log("3 CONTA DIAMOND");
//         opcaoContasPremmium = lerTeclado.questionInt("\nDigite qual o nivel da conta premmium que deseja: ")
//         break;
//     case 3:
//         console.log("\nChave pix: 58222039000133");
//         break;
//     case 4:
//         console.log("\nCoins International Corporation");
//         break;
//     case 5:
//         console.log("\nAguarde um momento, estamos te direcionando para um de nossos atendentes... ");
//         break;
//     default:   
        
// }


// }while  (opcao !== 0);

// if(opcao === 0) console.log("\nAte Breve!!");



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Adivinhe o número (while)
// ------------------------------------------------------------
// a) Gere um número secreto aleatório de 1 a 50 (Math.random())
// b) Peça o nome do jogador.
// c) Usando while, repita até o jogador acertar:
//    - Peça um palpite.
//    - Se muito alto, exiba: "Muito alto! Tente menor."
//    - Se muito baixo, exiba: "Muito baixo! Tente maior."
//    - Se acertou, saia do while.
// d) Ao acertar, exiba:
//    "<nome> acertou após <tentativas> tentativa(s)! O número era <secreto>."

// → Seu código aqui:

// const numeroAleatorio = Math.floor(Math.random() * (50 - 1) + 1);
// const nomePlayer = lerTeclado.question("Digite seu nick: ")
// let numeroJogador = null
// let contadorTentativa = 0

// console.log("\nTENTE ADIVINHAR O NUMERO SECRETO DE 1 A 50\n");

// while(numeroJogador !== numeroAleatorio){
//     numeroJogador = lerTeclado.questionInt("\nDigite seu palpite: ")
//     if(numeroJogador <= 0 || numeroJogador > 50){
//         console.log("\nNumero Invalido!!");
        
//     }else{
//         if(numeroJogador > numeroAleatorio){
//             console.log("\nMuito alto! Tente menor."); 
//             contadorTentativa++;      
//         }else if(numeroJogador < numeroAleatorio){
//             console.log("\nMuito baixo! Tente maior."); 
//             contadorTentativa++;
//         }else{
//             console.log(`\n${nomePlayer} acertou após ${contadorTentativa} tentativa(s)! O número era ${numeroAleatorio}.`);            
//         };

//     }
    
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:

// const numeroUsuario = lerTeclado.questionInt("Digite um numero inteiro: ");
// let i = 1
// let resultado = null

// if(numeroUsuario <= 0){
//     console.log("\nNumero Invalido!!!");    
// }else{
//     while(i <= 10){
//         resultado  = numeroUsuario * i;
//         console.log(`${numeroUsuario} * ${i} = ${resultado}`);
//         i++    
//     };
// };




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contador com condição composta
// ------------------------------------------------------------
// a) Declare 'saldo' com valor 1000 e 'rodada' com valor 0.
// b) Usando while, simule saques aleatórios enquanto o saldo for maior que 0 E a rodada for menor que 10:
//    - A cada rodada, gere um saque aleatório de 50 a 200:
//    - Se o saque for maior que o saldo, exiba: "Saldo insuficiente. Fim!" e encerre.
//    - Caso contrário, desconte do saldo e exiba:
//      "Rodada <rodada>: sacou R$ <saque> | Novo saldo: R$ <saldo>"
// c) Ao final, exiba o saldo restante e o total de rodadas.

// → Seu código aqui:

let saldo = 1000
let rodada = 0

do{
    let saque = Math.floor(Math.random() * (200 - 50)+50);
    if(saque > saldo){
        console.log("Saldo insuficiente.");        
    }else{
        saldo -= saque
        console.log(`Rodada ${rodada}: sacou R$ ${saque} | Novo saldo: R$ ${saldo}`);        
    };
    rodada++

}while(saldo > 0 && rodada < 10)

console.log(`Saldo restante: ${saldo} | Total de rodadas: ${rodada}`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Do...while: cadastro em loop
// ------------------------------------------------------------
// a) Crie um array vazio 'contatos'.
// b) Usando do...while, repita:
//    - Peça nome e telefone do contato.
//    - Adicione um objeto { nome, telefone } ao array.
//    - Pergunte: "Adicionar outro contato?" (keyInYN()).
//    - Repita enquanto o usuário responder que sim.
// c) Ao sair do loop, exiba todos os contatos com console.table().
// d) Exiba: "Total de contatos cadastrados: <qtd>"

// → Seu código aqui:


console.log("_______________________________");