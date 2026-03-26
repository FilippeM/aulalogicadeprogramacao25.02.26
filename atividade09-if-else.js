// ============================================================
//   ATIVIDADE 07 – Estruturas de Controle (If / Else)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-07.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync')
// ------------------------------------------------------------
// EXERCÍCIO 1 – If simples
// ------------------------------------------------------------
// a) Declare "pontos" com valor 120.
// b) Se "pontos" for maior que 100, exiba: "Nível alcançado!".
//    Mas se "pontos" for maior que 200, exiba somente: "Nível máximo alcançado!"

// → Seu código aqui:

// let pontos = 120

// if(pontos > 200){
//     console.log("Nível máximo alcançado!")
// }else if(pontos >= 100){
//     console.log("Nível alcançado!")
// }else{
//     console.log("Voce não atingiu experiencia para o proximo nivel")
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – If / Else
// ------------------------------------------------------------
// a) Declare "hora" com o valor 14 (representando 14h).
// b) Se hora for menor que 12, exiba: "Bom dia!".
// c) Se hora for menor que 18, exiba: "Boa tarde!".
// d) Senão, exiba: "Boa noite!"

// → Seu código aqui:

// let hora = 11

// if(hora < 12){
//     console.log("Bom dia!")
// }else if (hora < 18){
//     console.log("Boa tarde!")
// }else{
//     console.log("Boa noite!")
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário sua idade usando questionInt().
// b) Se a idade for maior ou igual a 18, exiba: "Adulto".
//    Se a idade for menor que 12, exiba: "Criança".
//    Senão, exiba: "Jovem".

// → Seu código aqui:

// let idade = lerTeclado.questionInt("Informe sua idade: ")

// if(idade >= 18){
//     console.log("Adulto")
// }else if(idade < 12){
//     console.log("Criança")
// }else{
//     console.log("Jovem")
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – If / Else If / Else
// ------------------------------------------------------------
// a) Declare "notaAluno" com valor 6.8.
// b) Em uma variável "status", usando if/else if/else, armazene:
//    - nota >= 9     → "Aprovado com mérito"
//    - nota >= 7     → "Aprovado"
//    - nota >= 5     → "Recuperação"
//    - abaixo de 5   → "Reprovado"
// c) AO final, exiba a nota e a situação com template literal.

// → Seu código aqui:

// let notaAluno = 6.8

// let status;

// if(notaAluno >= 9){
//     status = "Aprovado com mérito"
// }else if(notaAluno >= 7){
//     status = "Aprovado"
// }else if(notaAluno >= 5){
//     status = "Recuperacao"
// }else{
//     status = "Reprovado"
// }

// console.log(`Sua nota foi ${notaAluno} | Status do aluno: ${status}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – If / Else If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário a temperatura atual (questionFloat()).
// b) Classifique e exiba usando if/else if/else:
//    - temperatura < 10           → "Muito frio"
//    - temperatura >= 10 e < 18   → "Frio"
//    - temperatura >= 18 e <= 25  → "Agradável"
//    - temperatura > 25 e <= 35   → "Quente"
//    - temperatura > 35           → "Muito quente"

// → Seu código aqui:

// let temperaturaAtual = lerTeclado.questionFloat("Qual a temperatura atual? ")

// if(temperaturaAtual > 35){
//     console.log(`A temperatura atual é: ${temperaturaAtual} | Status: Muito quente`)
// }else if(temperaturaAtual > 25 && temperaturaAtual <= 35){
//     console.log(`A temperatura atual é: ${temperaturaAtual} | Status: Quente`)
// }else if(temperaturaAtual >= 18 && temperaturaAtual <= 25){
//     console.log(`A temperatura atual é: ${temperaturaAtual} | Status: Agradável`)
// }else if(temperaturaAtual >= 10 && temperaturaAtual < 18){
//     console.log(`A temperatura atual é: ${temperaturaAtual} | Status: Frio`)
// }else{
//     console.log(`A temperatura atual é: ${temperaturaAtual} | Status: Muito frio`)
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – If aninhado
// ------------------------------------------------------------
// a) Pergunte ao usuário e armazene as informações em um objeto:
//    - Nome (question()).
//    - Se possui ingresso (keyInYN()).
//    - Sua idade (questionInt()).
// b) Se NÃO possui ingresso → exiba: "<Nome>, dirija-se à bilheteria."
//    Se possui ingresso:
//      - idade < 18  → "Meia-entrada: menor de idade."
//      - idade >= 60 → "Meia-entrada: melhor idade."
//      - caso contrário → "Entrada inteira."

// → Seu código aqui:

// let usuario = {
//     nome: lerTeclado.question("Informe seu nome: "),
//     possuiIngresso: lerTeclado.keyInYN("Voce possui ingresso? [S/N]"),
//     idade: lerTeclado.questionInt("Digite sua idade: ")
// }

// if(!usuario.possuiIngresso){
//     console.log(`${usuario.nome}, dirija-se à bilheteria.`)
// } else{
//     if(usuario.idade >= 60){
//         console.log("Meia-entrada: melhor idade.")
//     }else if(usuario.idade < 18){
//         console.log("Meia-entrada: menor de idade.")            
//     }else{
//         console.log("Entrada inteira.")
//     }
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – If com operadores lógicos (&&)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome (question()).
//    - Idade (questionInt()).
//    - Se possui habilitação (keyInYN()).
// b) Armazene os dados em um objeto chamado "motorista".
// c) Para alugar um carro, o motorista precisa ter 21 anos ou mais E possuir habilitação.
//    - Se pode alugar → exiba: "<nome>, você pode alugar o veículo."
//    - Senão          → exiba: "<nome>, você não atende aos requisitos."

// → Seu código aqui:

// let motorista = {
//     nome: lerTeclado.question("Digite seu nome: "),
//     idade: lerTeclado.questionInt("Digite sua idade: "),
//     possuiHabilitacao: lerTeclado.keyInYN("Possui habilitacao? [S/N]")
// }

// if(motorista.idade >= 21 && motorista.possuiHabilitacao){
//     console.log(`${motorista.nome}, você pode alugar o veículo.`)
// }else{
//     console.log(`${motorista.nome}, você não atende aos requisitos.`)    
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – If com operadores lógicos (||)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se é estudante.
//    - Se é idoso, com 60 anos ou mais.
// b) Se é estudante OU idoso → exiba: "Desconto de 50% aplicado!"
//    Senão → exiba: "Sem desconto. Preço cheio."

// → Seu código aqui:

// let usuario = {
//     ehEstudante: lerTeclado.keyInYN("Voce e estudante? [S/N]"),
//     ehIdoso: lerTeclado.keyInYN("Voce e idoso 60+ ? [S/N]")
// }

// if(usuario.ehEstudante || usuario.ehIdoso){
//     console.log("Desconto de 50% aplicado!")
// }else{
//     console.log("Sem desconto. Preço cheio.")  
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Sistema de notas completo
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do aluno.
//    - Nota da prova 1.
//    - Nota da prova 2.
// b) Armazene os dados em um objeto "aluno" e calcule a média
//    (média = (prova1 + prova2) / 2). Adicione a média ao objeto.
// c) Classifique e exiba com if/else if/else:
//    - média >= 7  → "Aprovado"
//    - média >= 5  → "Em recuperação"
//    - abaixo de 5 → "Reprovado"
// d) Exiba o objeto "aluno" com console.table().
// e) Exiba uma mensagem final: "<nome>: <situação> (média: <média>)"

// → Seu código aqui:

// let aluno = {
//     nome: lerTeclado.question("Informe o nome do aluno: "),
//     nota: [lerTeclado.questionFloat("Informe a nota da primeira prova: "),lerTeclado.questionFloat("Informe a nota da segunda prova: ")]
// }

// aluno.media = (aluno.nota[0] + aluno.nota[1]) / aluno.nota.length

// let situacao
// if(aluno.media >= 7){
//     situacao = "Aprovado"
// }else if(aluno.media >= 5){
//     situacao = "Em recuperação"
// }else{
//     situacao = "Reprovado"
// }

// console.table(aluno)

// console.log(`O aluno: ${aluno.nome} está ${situacao} pois sua media foi: ${aluno.media}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Calculadora interativa
// ------------------------------------------------------------
// a) Peça ao usuário dois números usando questionFloat().
// b) Peça ao usuário que escolha uma operação digitando um número:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão
//    Use questionInt() para capturar a escolha.
// c) Armazene os dois números, o número referente à escolha e o símbolo referente à escolha
//    em um objeto 'calculo' com as propriedades:
//    numeroA, numeroB, operacao, simbolo.
// d) Com base na escolha, calcule o resultado usando if/else if, else.
//    Dica: se a operação for divisão e o segundo número for 0, exiba um aviso de erro.
// e) Exiba no console o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Exemplo: "10 + 3 = 13"
// f) Realize testes para verificar se a calculadora está funcionando corretamente.
// g) Chame o professor para realizar alguns testes 🫡

// → Seu código aqui:

// let calculo = {
//     numeroA: lerTeclado.questionFloat("Digite o primeiro numero: "),
//     numeroB: lerTeclado.questionFloat("Digite o segundo numero: "),
//     operacao: lerTeclado.questionInt("Escolha a operacao: 1 Soma | 2 Subtracao | 3 Multiplicacao | 4 Divisao:  "),
//     simbolo: ""
// }
// let resultado

// if(calculo.operacao > 4 || calculo.operacao < 1){
//     console.log("valor invalido");
// } else {
//     if(calculo.operacao === 1){
//         resultado = calculo.numeroA + calculo.numeroB;
//         calculo.simbolo = "+"
//     }else if(calculo.operacao === 2){
//         resultado = calculo.numeroA - calculo.numeroB;
//         calculo.simbolo = "-"
//     }else if(calculo.operacao === 3){
//         resultado = calculo.numeroA * calculo.numeroB;
//         calculo.simbolo = "*"
//     }else {
//         if(calculo.numeroB === 0){
//             console.log("Erro! esta operacao nao pode ser realizada")
//         }else{
//             resultado = calculo.numeroA / calculo.numeroB;
//             calculo.simbolo = "/"   
//         } 
//     } 
//     if (calculo.simbolo !== "") {
//         console.log(`${calculo.numeroA} ${calculo.simbolo} ${calculo.numeroB} = ${resultado} `)
//     }
// }







console.log("_______________________________");