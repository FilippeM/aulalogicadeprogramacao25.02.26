// ============================================================
//   ATIVIDADE 04 – Operadores Aritméticos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-04.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================
let lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Operações básicas
// ------------------------------------------------------------
// Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// Calcule e exiba no console, usando template literal, o cálculo e o resultado:
//    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// a) A soma dos dois números.
// b) A subtração (num1 - num2).
// c) A multiplicação.
// d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// e) O resto da divisão (módulo %).
// f) num1 elevado a num2 (potência).

// → Seu código aqui:

// let num1 = 18
// let num2 = 5

// console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`)
// console.log(`Cálculo: ${num1} - ${num2} = ${num1 - num2}`)
// console.log(`Cálculo: ${num1} * ${num2} = ${num1 * num2}`)
// let resultadoDivisao = num1 / num2 
// console.log(`Cálculo: ${num1} / ${num2} = ${(num1 / num2).toFixed(2)}.`) //colocar entre parenteses a operação p/ a função toFixed executar no na operação inteira.
// console.log(`Calculo: ${num1} / ${num2} = ${resultadoDivisao.toFixed(2)}`) //linha atende a questão letra d
// console.log(`Cálculo: ${num1} % ${num2} = ${num1 % num2}`)
// console.log(`Cálculo: ${num1} ** ${num2} = ${num1 ** num2}`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Área e perímetro
// ------------------------------------------------------------
// a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// d) Exiba no console usando template literal:
//    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// → Seu código aqui:

// let largura = 8
// let altura = 5 // variaveis declaradas

// let area = largura * altura // atende a letra b da questão
// let perimetro = (2*largura) + (2*altura) // atende a letra c da questão

// console.log(`Retângulo | Largura: ${largura} | Altura: ${altura} | Área: ${area} | Perímetro: ${perimetro}`) // atende a letra d da questão



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculando desconto
// ------------------------------------------------------------
// a) Declare a variável "precoOriginal" com o valor 250.
// b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// c) Calcule o valor do desconto e armazene em "valorDesconto".
//    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// e) Exiba no console usando template literal:
//    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
//    Use toFixed(2) nos valores em reais.

// → Seu código aqui:

// let precoOriginal = 250
// let percentualDesconto = 15
// let valorDesconto = precoOriginal * (percentualDesconto / 100)
// let precoFinal = precoOriginal - valorDesconto

// console.log(`Preço original: R$ ${precoOriginal.toFixed(2)} | Desconto: R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Operadores de atribuição composta
// ------------------------------------------------------------
// a) Declare uma variável "pontos" com o valor 100.
// b) Some 50 pontos usando +=. Exiba o resultado.
// c) Subtraia 30 pontos usando -=. Exiba o resultado.
// d) Multiplique por 2 usando *=. Exiba o resultado.
// e) Divida por 4 usando /=. Exiba o resultado.
// f) Para cada operação, use template literal:
//    "Pontos após <tipo da operação>: <valor>"

// → Seu código aqui:

// let pontos = 100
// soma = pontos += 50
// console.log(pontos)
// subtracao = pontos -= 30
// console.log(pontos)
// multiplicacao = pontos *= 2
// console.log(pontos)
// divisao = pontos /= 4
// console.log(pontos)

// console.log(`Pontos após +: ${soma}`)
// console.log(`Pontos após -: ${subtracao}`)
// console.log(`Pontos após *: ${multiplicacao}`)
// console.log(`Pontos após /: ${divisao}`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Incremento e decremento
// ------------------------------------------------------------
// a) Declare uma variável "vidas" com valor 3.
// b) Exiba o valor atual com console.log().
// c) Use ++ para incrementar "vidas" duas vezes, exibindo após cada incremento.
// d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// e) Declare uma variável "nivel" com valor 1.
// f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// → Seu código aqui:

// let vidas = 3
// console.log(vidas)

// vidas++
// console.log(vidas)
// vidas++
// console.log(vidas)
// vidas--
// console.log(vidas)

// let nivel = 1

// ++nivel
// console.log(nivel)
// ++nivel
// console.log(nivel)
// ++nivel
// console.log(nivel)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções matemáticas (Math)
// ------------------------------------------------------------
// a) Declare "nota" com o valor 7.3.
// b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
//    Use template literal para identificar cada um.
// c) Declare "temperatura" com o valor -12.5.
// d) Exiba o valor absoluto usando Math.abs(temperatura).
// e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// → Seu código aqui:

// let nota = 7.3

// console.log(`Valor da nota utilizando Math.round = ${Math.round(nota)}`) //arredonda para o inteiro mais próximo (.5 → para cima)
// console.log(`Valor da nota utilizando Math.floor = ${Math.floor(nota)}`) // arredonda para baixo (piso)
// console.log(`Valor da nota utilizando Math.ceil = ${Math.ceil(nota)}`) //arredonda para cima (teto)

// let temperatura = -12.5
// console.log(Math.abs(temperatura))

// console.log(Math.max(42, 17, 89, 5, 63))
// console.log(Math.min(42, 17, 89, 5, 63))



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Média de notas
// ------------------------------------------------------------
// a) Peça ao usuário 3 notas (use questionFloat()).
// b) Calcule a média aritmética das 3 notas.
// c) Exiba no console:
//    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
//    "Média: <media>" (com 2 casas decimais usando toFixed(2))

// → Seu código aqui:

// let notasAulas = [
//     lerTeclado.questionFloat("Informe a primeira nota: "),
//     lerTeclado.questionFloat("Informe a segunda nota: "),
//     lerTeclado.questionFloat("Informe a terceira nota: "),
// ]

// let media = notasAulas[0] + notasAulas[1] + notasAulas[2] / notasAulas.length

// console.log(`Nota 1: ${notasAulas[0]} | Nota 2: ${notasAulas[1]} | Nota 3: ${notasAulas[2]}`)
// console.log(`Média: ${media.toFixed(2)}`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Calculadora de troco
// ------------------------------------------------------------
// a) Peça ao usuário o valor total da compra (questionFloat()).
// b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// c) Calcule o troco (valorEntregue - totalCompra).
// d) Exiba no console:
//    "Total da compra:  R$ <total>"
//    "Valor entregue:   R$ <entregue>"
//    "Troco:            R$ <troco>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:

// let valorTotaldaCompra = lerTeclado.questionFloat("Informe o valor total da compra: ")
// let valorEntreguePeloCliente = lerTeclado.questionFloat("Informe o valor entregue pelo cliente: ")

// let troco = valorEntreguePeloCliente - valorTotaldaCompra

// console.log(`
// Total da compra:  R$ ${valorTotaldaCompra.toFixed(2)}
// Valor entregue:   R$ ${valorEntreguePeloCliente.toFixed(2)}
// Troco:            R$ ${troco.toFixed(2)}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// a) Dada uma lista de preços, calcule e exiba o total.
let precos = [29.90, 49.99, 15.75, 99.90];
// b) Dada uma lista de notas, calcule e exiba a média.
let notas = [7.5, 8.2, 6.5, 9.0];
// c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
let idades = [15, 22, 30, 18, 25];

// → Seu código aqui:

// let totalPrecos = precos[0] + precos[1] + precos[2] + precos[3]
// console.log(totalPrecos.toFixed(2))

// let mediaPrecos = (precos[0] + precos[1] + precos[2] + precos[3]) / notas.length
// console.log(mediaPrecos.toFixed(2))

// console.log(Math.max(idades[0],idades[1],idades[2],idades[3],idades[4]))
// console.log(Math.min(idades[0],idades[1],idades[2],idades[3],idades[4]))


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:
let turma = {
  aluno1: {
    nome: "Joao",
    notas: []
  },
  aluno2: {
    nome: "Maria",
    notas: []
  },
  aluno3: {
    nome: "Pedro",
    notas: []
  }
}
// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:

// turma.aluno1.notas.push(lerTeclado.questionFloat(`Digite a primeira nota de ${turma.aluno1.nome}: `))
// turma.aluno1.notas.push(lerTeclado.questionFloat(`Digite a segunda nota de ${turma.aluno1.nome}: `))
// turma.aluno1.notas.push(lerTeclado.questionFloat(`Digite a terceira nota de ${turma.aluno1.nome}: `))

// turma.aluno2.notas.push(lerTeclado.questionFloat(`Digite a primeira nota de ${turma.aluno2.nome}: `))
// turma.aluno2.notas.push(lerTeclado.questionFloat(`Digite a segunda nota de ${turma.aluno2.nome}: `))
// turma.aluno2.notas.push(lerTeclado.questionFloat(`Digite a terceira nota de ${turma.aluno2.nome}: `))

// turma.aluno3.notas.push(lerTeclado.questionFloat(`Digite a primeira nota de ${turma.aluno3.nome}: `))
// turma.aluno3.notas.push(lerTeclado.questionFloat(`Digite a segunda nota de ${turma.aluno3.nome}: `))
// turma.aluno3.notas.push(lerTeclado.questionFloat(`Digite a terceira nota de ${turma.aluno3.nome}: `))

// let mediaAluno1 = (turma.aluno1.notas[0] + turma.aluno1.notas[1] + turma.aluno1.notas[2]) / turma.aluno1.notas.length
// console.log(`A media de ${turma.aluno1.nome} é ${mediaAluno1}`)

// let mediaAluno2 = (turma.aluno2.notas[0] + turma.aluno2.notas[1] + turma.aluno2.notas[2]) / turma.aluno2.notas.length
// console.log(`A media de ${turma.aluno2.nome} é ${mediaAluno2}`)

// let mediaAluno3 = (turma.aluno3.notas[0] + turma.aluno3.notas[1] + turma.aluno3.notas[2]) / turma.aluno3.notas.length
// console.log(`A media de ${turma.aluno3.nome} é ${mediaAluno3}`)

// let qtdAlunos = Object.keys(turma).length
// let mediaGeralTurma = (mediaAluno1 + mediaAluno2 + mediaAluno3) / qtdAlunos
// console.log(qtdAlunos)
// console.log(`A media geral da turma foi: ${mediaGeralTurma}`)


// console.log(`A maior nota de ${turma.aluno1.nome} foi: ${Math.max(turma.aluno1.notas[0],turma.aluno1.notas[1],turma.aluno1.notas[2])}`)
// console.log(`A menor nota de ${turma.aluno1.nome} foi: ${Math.min(turma.aluno1.notas[0],turma.aluno1.notas[1],turma.aluno1.notas[2])}`)

// console.log(`A maior nota de ${turma.aluno2.nome} foi: ${Math.max(turma.aluno2.notas[0],turma.aluno2.notas[1],turma.aluno2.notas[2])}`)
// console.log(`A menor nota de ${turma.aluno2.nome} foi: ${Math.min(turma.aluno2.notas[0],turma.aluno2.notas[1],turma.aluno2.notas[2])}`)

// console.log(`A maior nota de ${turma.aluno3.nome} foi: ${Math.max(turma.aluno3.notas[0],turma.aluno3.notas[1],turma.aluno3.notas[2])}`)
// console.log(`A menor nota de ${turma.aluno3.nome} foi: ${Math.min(turma.aluno3.notas[0],turma.aluno3.notas[1],turma.aluno3.notas[2])}`)

// let todasNotasDaTurma = [
//   turma.aluno1.notas[0],
//   turma.aluno1.notas[1],
//   turma.aluno1.notas[2],
//   turma.aluno2.notas[0],
//   turma.aluno2.notas[1],
//   turma.aluno2.notas[2],
//   turma.aluno3.notas[0],
//   turma.aluno3.notas[1],
//   turma.aluno3.notas[2],
// ]
// console.log(`A maior nota da turma foi: ${Math.max(todasNotasDaTurma[0],
//   todasNotasDaTurma[1],
//   todasNotasDaTurma[2],
//   todasNotasDaTurma[3],
//   todasNotasDaTurma[4],
//   todasNotasDaTurma[5],
//   todasNotasDaTurma[6],
//   todasNotasDaTurma[7],
//   todasNotasDaTurma[8])
// }`)

// console.log(`A menor nota da turma foi: ${Math.min(todasNotasDaTurma[0],
//   todasNotasDaTurma[1],
//   todasNotasDaTurma[2],
//   todasNotasDaTurma[3],
//   todasNotasDaTurma[4],
//   todasNotasDaTurma[5],
//   todasNotasDaTurma[6],
//   todasNotasDaTurma[7],
//   todasNotasDaTurma[8])
// }`)

console.log("_______________________________");