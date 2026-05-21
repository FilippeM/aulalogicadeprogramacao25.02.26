let lerTeclado = require('readline-sync');


let matriz = [
    ["","",""],
    ["","",""],
    ["","",""]
];
let qtdRodadas = 5
// let jogadores = [
//     {nome: "Jogador 1",
//     tag: 1,
//     marcacao: "X"},
//     {nome: "Jogador 2",
//     tag: 2,
//     marcacao: "O"}
// ]
console.table(matriz)

for(let i = 0; i < qtdRodadas; i++){
    console.log(`
    Casa 00 | Casa 01 | Casa 02
    Casa 10 | Casa 11 | Casa 12
    Casa 20 | Casa 21 | Casa 22\n`
    );
    
    //let verificacaoDoJogador = lerTeclado.questionInt("Voce é o Jogador 1 ou 2: ")
    let rodada  = lerTeclado.question("Digite em qual casa do tabuleiro deseja jogar: ");
    let jogada = lerTeclado.question("Digite X ou O para marcar sua jogada: ")

    switch(rodada){
        case "00": 
            matriz[0][0] = jogada;
            console.table(matriz);
            break;
        case "01":
            matriz[0][1] = jogada;
            console.table(matriz);
            break;
        case "02":
            matriz[0][2] = jogada;
            console.table(matriz);
            break;
        case "10": 
            matriz[1][0] = jogada;
            console.table(matriz);
            break;
        case "11":
            matriz[1][1] = jogada;
            console.table(matriz);
            break;
        case "12":
            matriz[1][2] = jogada;
            console.table(matriz);
            break;
        case "20": 
            matriz[2][0] = jogada;
            console.table(matriz);
            break;
        case "21":
            matriz[2][1] = jogada;
            console.table(matriz);
            break;
        case "22":
            matriz[2][2] = jogada;
            console.table(matriz);
            break;
        default:
            console.log("DIGITE UM VALOR VALIDO");
            
    };

};


