// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================

let lerTeclado = require(`readline-sync`)
// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:

// const m = [
// [10, 20, 30],
// [40, 50, 60],
// [70, 80, 90],
// ];

// console.log(`Linhas: ${m.length}`); //m.length é a quantidade de linhas, pega quantas arrays tem dentro da array
// console.log(`Colunas: ${m[0].length}`); // m[0].length é a qtd de colunas, pega quantos indices tem dentro das arrays que esta dentro da array MAE.

// console.log(`Elemento central: ${m[1][1]}`);
// console.log(`Canto inferior direito: ${m[2][m.length - 1]}`); // length -1 capta sempre o ultimo indice do array.



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:

// const matriz = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
// ];

// let soma = 0

// // Para percorrer todos os elementos, usamos DOIS for aninhados:
// // - O externo controla as LINHAS (i).
// // - O interno controla as COLUNAS (j).

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         console.log(`Matriz[${i}][${j}]: ${matriz[i][j]}`);
//         soma += matriz[i][j];        
//     };
// };

// console.log(`A soma de todos os numeros da matriz é: ${soma}`);





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
//    const m = [
//      [12,  7, 25],
//      [ 3, 18,  9],
//      [31, 14, 22],
//    ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:

// const m = [
// [12,  7, 25],
// [ 3, 18,  9],
// [31, 14, 22],
// ];

// let maior = m[0][0];
// let menor = m[0][0];
// let localMaior = null;
// let localMenor = null;

// for(let i = 0; i < m.length; i++){
//     for(let j = 0; j < m[i].length; j++){
//         if(maior < m[i][j]){
//             maior = m[i][j];
//             localMaior = `Linha: ${i} Coluna: ${j}`
//         };
//         if(menor > m[i][j]){
//             menor = m[i][j];
//             localMenor = `Linha: ${i} Coluna: ${j}`        
//         };
//     };
// };

// // console.log(`O maior numero da matriz é: ${maior} | Local: ${localMaior}`);
// // console.log(`O menor numero da matriz é: ${menor} | Local: ${localMenor}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:

const m = [
    [12,  7, 25,  9],
    [ 3, 18,  9, 12],
    [31, 14, 22, 55],
    [1,   1,  2,  5]
];

for(let i = 0; i < m.length ; i++ ){
    let somaLinha = 0;
    for(let j = 0; j < m[i].length; j++){
        somaLinha += m[i][j];
    };
    
    console.log(`Linha: ${i} | Soma: ${somaLinha} `);    
};

for (let j = 0; j < m[0].length ; j++ ){
    let somaColuna = 0;
    for(let i = 0; i < m.length; i++){
        somaColuna += m[i][j];
    };

    console.log(`Coluna: ${j} | Soma: ${somaColuna}`);    
};

let somaDiagonal = 0;

for(let i = 0; i < m.length; i++){
    for(let j = 0; j < m[0].length; j++){
        if(i === j){
            somaDiagonal += m[i][j]
        };
    };  
    
};

console.log(`Soma da diagonal: ${somaDiagonal}`);




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:

let qtdLinhas = null;
let qtdColunas = null;
let matriz = [];

console.log("CONFIGURE UMA MATRIZ QUE TENHA A MESMA QUANTIDADE DE LINHAS E COLUNAS\n");

qtdLinhas = lerTeclado.questionInt("Digite a quantidade de linhas da matriz: ");
qtdColunas = lerTeclado.questionInt("Digite a quantidade de colunas da matriz: ");

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){

    };
};

console.log("_______________________________");