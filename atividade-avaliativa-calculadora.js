let lerTeclado = require('readline-sync')

let numeroA = null; // captar primeiro input
let numeroB = null; // captar segundo input
let operacao = null; // captar escolha da operacao desejada pelo usuario
let resultado = null; // mostrar resultado da operacao
let extensoOperacao = null; // mostrar "string" da operacao
let seguirOuParar = false; // receber input se usuario deseja fazer nova operacao ou nao



do{
    numeroA = lerTeclado.questionInt("Digite o primeiro numero: ");
    numeroB = lerTeclado.questionInt("Digite o segundo numero: ");
    console.log(`
    Escolha dentre as opcoes qual operacao deseja executar
    1 - SOMA
    2 - SUBTRACAO
    3 - MULTIPLICACAO
    4 - DIVISAO
    `);
    
    operacao = lerTeclado.questionInt("Digite sua escolha: ");
    
    while(operacao < 1 || operacao > 4){
        console.log("\nOPCAO INVALIDA - ESCOLHA UMA DAS OPCOES"); // criado para caso usuario digitar valor diferente das opcoes, repetir a estrutura.
    
        console.log(`
        Escolha dentre as opcoes qual operacao deseja executar:
        1 - SOMA
        2 - SUBTRACAO
        3 - MULTIPLICACAO
        4 - DIVISAO
        `);
            
        operacao = lerTeclado.questionInt("\nDigite sua escolha: ");    
    };
    
    switch(operacao){
        case 1:
            resultado = numeroA + numeroB;
            extensoOperacao = "+";
            console.log(`\n${numeroA} ${extensoOperacao} ${numeroB} = ${resultado}`);        
            break;
        case 2:
            resultado = numeroA - numeroB;
            extensoOperacao = "-";
            console.log(`\n${numeroA} ${extensoOperacao} ${numeroB} = ${resultado}`);
            break;
        case 3:
            resultado = numeroA * numeroB;
            extensoOperacao = "*";
            console.log(`\n${numeroA} ${extensoOperacao} ${numeroB} = ${resultado}`);
            break;
        case 4:
            resultado = numeroA / numeroB;
            extensoOperacao = "/";
            console.log(`\n${numeroA} ${extensoOperacao} ${numeroB} = ${resultado}`);
            break;
    }; // switch criado para realizar as operacoes de acordo escolha do usuario e mostrar em tela.
    
    
    seguirOuParar = lerTeclado.keyInYN("\nDeseja realizar outra operacao: [S/N]");
    
}while(seguirOuParar);