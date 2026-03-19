// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:

// let primeiro = 10
// let segundo = 10
// const resultado01 = primeiro == segundo
// const resultado02 = primeiro === segundo
// console.log(`O resultado de == usando: ${primeiro} == ${segundo} → ${resultado01}`)
// console.log(`O resultado de === usando: ${primeiro} === ${segundo} → ${resultado02}`) // atende a letra a da questão

// let dezPorExtenso = "10"
// const resultado03 = primeiro == dezPorExtenso
// const resultado04 = primeiro === dezPorExtenso
// console.log(`O resultado de == usando: ${primeiro} == ${dezPorExtenso} → ${resultado03}`)
// console.log(`O resultado de === usando: ${primeiro} === "${dezPorExtenso}" → ${resultado04}`) // atende a letra b da questão

// let zero = 0
// let falso = false
// const resultado05 = zero == falso
// const resultado06 = zero === falso
// console.log(`O resultado de == usando: ${zero} == ${falso} → ${resultado05}`)
// console.log(`O resultado de === usando: ${zero} === ${falso} → ${resultado06}`) // atende a letra c da questão

// let objetonulo = null
// let indefinido
// const resultado07 = objetonulo == indefinido
// const resultado08 = objetonulo === indefinido
// console.log(`O resultado de == usando: ${objetonulo} == ${indefinido} → ${resultado07}`)
// console.log(`O resultado de === usando: ${objetonulo} === ${indefinido} → ${resultado08}`) // atende a letra d da questão

// let javaExtenso01 = "JS"
// let javaExtenso02 = "JS"
// const resultado09 = javaExtenso01 == javaExtenso02
// const resultado10 = javaExtenso01 === javaExtenso02
// console.log(`O resultado de == usando: "${javaExtenso01}" == "${javaExtenso02}" → ${resultado09}`)
// console.log(`O resultado de === usando: "${javaExtenso01}" === "${javaExtenso02}" → ${resultado10}`) // atende a letra e da questão

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

// let numeroCinco = 5
// let numeroCinco00 = 5
// const resultado11 = numeroCinco != numeroCinco00
// console.log(`O resultado de != : ${numeroCinco} != ${numeroCinco00} → ${resultado11} `)
// const resultado111 = numeroCinco !== numeroCinco00
// console.log(`O resultado de !== : ${numeroCinco} !== ${numeroCinco00} → ${resultado111} `)

// let numeroCincoExtenso = "5"
// const resultado12 = numeroCinco != numeroCincoExtenso
// console.log(`O resultado de != : ${numeroCinco} != ${numeroCincoExtenso} → ${resultado12} `)
// const resultado122 = numeroCinco !== numeroCincoExtenso
// console.log(`O resultado de !== : ${numeroCinco} !== ${numeroCincoExtenso} → ${resultado122} `)

// let sete = 7
// let tres = 3
// const resultado13 = sete != tres
// console.log(`O resultado de != : ${sete} != ${tres} → ${resultado13} `)
// const resultado133 = sete !== tres
// console.log(`O resultado de !== : ${sete} !== ${tres} → ${resultado133} `)

// let confirm = true
// let umExtenso = 1
// const resultado14 = confirm != umExtenso
// console.log(`O resultado de != : ${confirm} != ${umExtenso} → ${resultado14} `)
// const resultado144 = confirm !== umExtenso
// console.log(`O resultado de !== : ${confirm} !== ${umExtenso} → ${resultado144} `)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

// let salarioA = 3500
// let salarioB = 4200

// const perguntaUm = salarioA > salarioB
// const perguntaDois = salarioA < salarioB
// const perguntaTres = salarioA >= salarioB
// const perguntaQuatro = salarioA <= salarioB
// const perguntaCinco = salarioA === salarioB

// console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}): ${perguntaUm}`)
// console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}): ${perguntaDois}`)
// console.log(`Salário A (R$ ${salarioA}) >= Salário B (R$ ${salarioB}): ${perguntaTres}`)
// console.log(`Salário A (R$ ${salarioA}) <= Salário B (R$ ${salarioB}): ${perguntaQuatro}`)
// console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}): ${perguntaCinco}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

// let estoque = 0
// const temEstoque = estoque > 0
// const estoqueZerado = estoque === 0

// let temperatura = 36.5
// let febre = temperatura >= 37.6

// console.log(`A quantidade do estoque é maior que zero? ${temEstoque? "Sim" : "Nao"} | Situacao do estoque: ${estoqueZerado? "Estoque zerado" : `Ainda tem ${estoque} produto no estoque`}`)

// console.log(`A temperatura da crianca é: ${temperatura}º | Ela está com febre? ${febre? "Sim" : "Nao"}`)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

let primeiroNumero = lerTeclado.questionInt("Digite o primeiro numero: ")
let segundoNumero = lerTeclado.questionInt("Digite o segundo numero: ")

const primeiraResposta = primeiroNumero > segundoNumero
const segundaResposta = primeiroNumero < segundoNumero
const terceiraResposta = primeiroNumero === segundoNumero
const quartaResposta = primeiroNumero >= segundoNumero

console.log(`O primeiro número é: ${primeiroNumero} | o segundo número é: ${segundoNumero} | O primeiro numero é maior que o segundo? ${primeiraResposta? "Sim" : "Não"}`)
console.log(`O primeiro número é: ${primeiroNumero} | o segundo número é: ${segundoNumero} | O primeiro numero é menor que o segundo? ${segundaResposta? "Sim" : "Não"}`)
console.log(`O primeiro número é: ${primeiroNumero} | o segundo número é: ${segundoNumero} | O primeiro numero é igual ao segundo? ${terceiraResposta? "Sim" : "Não"}`)
console.log(`O primeiro número é: ${primeiroNumero} | o segundo número é: ${segundoNumero} | O primeiro numero é maior ou igual ao segundo? ${quartaResposta? "Sim" : "Não"}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:


console.log("_______________________________");