// ============================================================
//   DESAFIOS (para quem já terminou a atividade 09) – For
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let lerTeclado = require('readline-sync')
// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial (questionFloat())
//    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
//    - Número de meses
// b) Usando um for, calcule e exiba mês a mês:
//    "Mês 1:  R$ <saldo>"
//    "Mês 2:  R$ <saldo>"
//    ...
//    A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
// c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().

// → Seu código aqui:


// let saldo = lerTeclado.questionFloat("Digite o saldo inicial: ");
// let saldoInicial = saldo; 
// let taxaJurosMensal = lerTeclado.questionFloat("Digite o valor da taxa de juros mensal: ");
// let qtdMeses = lerTeclado.questionInt("Digite quantos meses pretende deixar o dinheiro aplicado: ");
// let anual = []
// let cont = 0


// for(let i = 0; i < qtdMeses; i++){
//     saldo = saldo * (1 + taxaJurosMensal / 100);
//     console.log(`Mês ${i + 1}:  Saldo: R$${saldo.toFixed(2)}`);
//     let mes = {
//         nome: null,   
//         saldo: saldo.toFixed(2)
//     };
    
//     if(cont > 12){
//         cont = 0
//     }else{
//         cont++
//     };
    


//     switch(cont){
//         case 0:
//             mes.nome = ""
//         break;
//         case 1:
//             mes.nome = "Janeiro"
//         break;
//         case 2:
//             mes.nome = "Fevereiro"
//         break;
//         case 3:
//             mes.nome = "Março"
//         break;
//         case 4:
//             mes.nome = "Abril"
//         break;
//         case 5:
//             mes.nome = "Maio"
//         break;
//         case 6:
//             mes.nome = "Junho"
//         break;
//         case 7:
//             mes.nome = "Julho"
//         break;
//         case 8:
//             mes.nome = "Agosto"
//         break;
//         case 9:
//             mes.nome = "Setembro"
//         break;
//         case 10:
//             mes.nome = "Outubro"
//         break;
//         case 11:
//             mes.nome = "Novembro"
//         break;
//         case 12:
//             mes.nome = "Dezembro"
//         break;
//      }

//     anual.push(mes)
// }

// console.log(`O saldo total é: ${saldo.toFixed(2)} | Lucro apos ${qtdMeses} meses: ${(saldo - saldoInicial).toFixed(2)}`);
// console.table(anual)




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Cadastro e relatório de alunos
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos alunos serão cadastrados.
// b) Usando um for, colete de cada aluno:
//    - Nome (question())
//    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// c) Calcule a média de cada aluno e armazene como objeto:
//    { nome, notas, media, situacao }
//    A situação deve ser:
//      "Aprovado"    → média >= 7
//      "Recuperação" → média >= 5 e < 7
//      "Reprovado"   → média < 5
// d) Após coletar todos, percorra o array e exiba o relatório:
//    "<nome> | Média: <media> | <situacao>"
// e) Exiba:
//    - Média geral da turma
//    - Nome do aluno com maior média
//    - Nome do aluno com menor média
//    - Quantidade de aprovados, em recuperação e reprovados
// f) Exiba o array com console.table().

// → Seu código aqui:

let quantidade  = lerTeclado.questionInt("Digite quantos alunos serao cadastrados: ")
let qtdAlunos = quantidade;
let turma = []

for(let i = 0; i < qtdAlunos; i++){
    let aluno = {
        nome: lerTeclado.question(`Digite o nome do aluno ${i + 1}: `),
        notas: [
            lerTeclado.questionFloat(`Nota 1: `),
            lerTeclado.questionFloat(`Nota 2: `),
            lerTeclado.questionFloat(`Nota 3: `)
        ]
    };
    let media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / aluno.notas.length;
    let situacao = ""

    if(media >= 7){
        situacao = "Aprovado"
    }else if(media >= 5 && media < 7){
        situacao = "Recuperação"
    }else{
        situacao = "Reprovado"
    }
    aluno.media = media;
    aluno.situacao = situacao;    
    turma.push(aluno);

    console.log(`Nome: ${turma[i].nome} | Media: ${turma[i].media} | Situacao: ${turma[i].situacao}`)
}

//console.table(turma)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de adivinhar o número
// ------------------------------------------------------------
// O programa sorteia um número de 1 a 100 e o usuário tem no máximo 7 tentativas para adivinhar.
//
// a) Gere um número aleatório
//    Para gerar um número aleatório, utilize a função Math.random()
// b) Usando um for:
//    - Peça ao usuário um palpite.
//    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
//    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
//    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!"
// c) Se o usuário esgotar as tentativas sem acertar, exiba:
//    "Game over! O número era <secreto>."
// d) Ao final, exiba um resumo:
//    - Número secreto
//    - Número de tentativas usadas
//    - Resultado: "Vitória" ou "Derrota"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().

// → Seu código aqui:


console.log("_______________________________");