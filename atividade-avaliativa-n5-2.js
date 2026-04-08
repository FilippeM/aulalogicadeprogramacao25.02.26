//• Nome do(s) aluno(s): Filippe Mota
//
// ============================================================

let lerTeclado = require('readline-sync')
// ------------------------------------------------------------
// QUESTÃO ÚNICA (peso: 10) – Formulário Condicionado: Agência de Viagens
// ------------------------------------------------------------
//
// Você vai criar o sistema de recomendação de destinos de uma agência de viagens.
// O formulário faz perguntas ao usuário e, dependendo de cada resposta,
// o caminho seguido é diferente — até chegar a um dos destinos finais (A a I).
//
// REGRAS:
//   • Use if/else e/ou switch/case para toda a lógica de ramificação.
//   • Mostre as opções de cada pergunta com console.log() antes de coletar a resposta.
//   • Use questionInt() para perguntas de múltipla escolha numerada.
//   • Use question() para entradas de texto.
//   • Sempre que uma opção inválida for escolhida, exiba: "Opção inválida. Encerrando o formulário."
//     e não continue com as próximas perguntas.
//
// ─────────────────────────────────────────────────────────────
// PASSO A – Dados iniciais
// ─────────────────────────────────────────────────────────────
//
// Colete:
//   • "nomeViajante" → nome do viajante
//   • "idadeViajante" → idade
//   • "orcamento - 1) Econômico 2) Moderado 3) Luxo" → orçamento
//
// Exiba: "Olá, <nomeViajante>! Vamos encontrar o destino perfeito para você."
//
// ─────────────────────────────────────────────────────────────
// PASSO B – Pergunta 1
// ─────────────────────────────────────────────────────────────
//
// Exiba as opções e colete em "resp1":
//
//   Qual tipo de clima você prefere?
//   1) Tropical / Quente
//   2) Frio / Neve
//   3) Temperado / Ameno
//
// ─────────────────────────────────────────────────────────────
// PASSO C – Pergunta 2 (depende da Pergunta 1)
// ─────────────────────────────────────────────────────────────
//
//   se resp1 for Tropical → exiba e colete em "resp2":
//     Você prefere:
//     1) Praia e mar
//     2) Floresta e ecoturismo
//
//   se resp1 for Frio → exiba e colete em "resp2":
//     Você quer:
//     1) Neve de verdade
//     2) Frio sem neve
//
//   se resp1 for Temperado → exiba e colete em "resp2":
//     Você prefere explorar:
//     1) Cultura, museus e arquitetura histórica
//     2) Natureza, trilhas e parques nacionais
//
// ─────────────────────────────────────────────────────────────
// PASSO D – Pergunta 3 (depende das Perguntas 1 e 2)
// ─────────────────────────────────────────────────────────────
//
//   se resp1 for 1 e resp2 for 1 (Tropical + Praia) → exiba e colete em "resp3":
//     Como você prefere sua viagem?
//     1) Animada — praias badaladas e muito agito
//     2) Tranquila — sossego e natureza preservada
//
//   se resp1 for 1 e resp2 for 2 (Tropical + Floresta):
//     → Sem Pergunta 3. Vá direto ao PASSO E.
//
//   se resp1 for 2 e resp2 for 1 (Frio + Neve) → exiba e colete em "resp3":
//     Qual é o seu objetivo?
//     1) Praticar esportes de inverno (esqui, snowboard)
//     2) Contemplar a paisagem nevada e relaxar
//
//   se resp1 for 2 e resp2 for 2 (Frio + Sem neve):
//     → Sem Pergunta 3. Vá direto ao PASSO E.
//
//   se resp1 for 3 e resp2 for 1 (Temperado + Cultura) → exiba e colete em "resp3":
//     Qual região você prefere?
//     1) Europa
//     2) América do Sul
//
//   se resp1 for 3 e resp2 for 2 (Temperado + Natureza):
//     → Sem Pergunta 3. Vá direto ao PASSO E.
//
// ─────────────────────────────────────────────────────────────
// PASSO E – Destino final
// ─────────────────────────────────────────────────────────────
//
// Com base nas respostas, defina a variável "destino" conforme a tabela:
//
//   Caminho                                   | Destino
//   ──────────────────────────────────────────┼──────────────────────────────────────────────
//   Tropical → Praia → Animada       (1→1→1)  | A) "Cancún (México) ou Fortaleza (Brasil)"
//   Tropical → Praia → Tranquila     (1→1→2)  | B) "Maldivas ou Fernando de Noronha (Brasil)"
//   Tropical → Floresta              (1→2)    | C) "Amazônia (Brasil) ou Costa Rica"
//   Frio → Neve → Esportes           (2→1→1)  | D) "Aspen (EUA) ou Bariloche (Argentina)"
//   Frio → Neve → Contemplação       (2→1→2)  | E) "Ushuaia (Argentina) ou Lapônia (Finlândia)"
//   Frio → Sem neve                  (2→2)    | F) "Serra Gaúcha (Brasil) ou Patagônia Chilena"
//   Temperado → Cultura → Europa     (3→1→1)  | G) "Lisboa, Barcelona ou Roma"
//   Temperado → Cultura → Américas   (3→1→2)  | H) "Buenos Aires, Cusco ou Cartagena"
//   Temperado → Natureza             (3→2)    | I) "Chapada dos Veadeiros ou Torres del Paine"
//
// Exiba o resultado com console.log() e template literal no formato:
//
//   ===============================================
//   |   RECOMENDAÇÃO DA AGÊNCIA VOYAGER           |
//   ===============================================
//   |   Viajante : <nomeViajante>                 |
//   |   Idade    : <idadeViajante> anos           |
//   |   Orçamento: <Econômico / Moderado / Luxo>  |
//   |   Destino  : <destino>                      |
//   ===============================================
//   Boa viagem, <nomeViajante>! O <destino> espera por você.
//
// Dica: converta "orcamento" para texto legível antes de exibir.
//   "1" → "Econômico"   "2" → "Moderado"   "3" → "Luxo"
//
// ─────────────────────────────────────────────────────────────
// PASSO F – Dica de orçamento (Bônus)
// ─────────────────────────────────────────────────────────────
//
// Após o resultado, exiba uma dica com base em "orcamento" (usando switch/case):
//   Econômico → "Dica: procure voos com antecedência e use hostels ou Airbnb!"
//   Moderado → "Dica: hotéis 3 estrelas e pacotes combinados são ótimas opções!"
//   Luxo → "Dica: resorts all-inclusive e voos executivos são a sua praia!"

// → Seu código aqui:

let cliente = {
    nomeViajante:   lerTeclado.question("Digite seu nome: "),
    idadeViajante:  lerTeclado.questionInt("Digite sua idade: "),
    orcamento:  lerTeclado.questionInt("Digite o numero de qual tipo de acomodacao deseja: 1 Economico | 2 Moderado | 3 Luxo : ")
}; //criado um objeto para armazenar os dados do cliente.

if(cliente.idadeViajante <= 0 || cliente.idadeViajante >= 130){
    console.log("Idade Invalida")
}else if(cliente.nomeViajante === ""){
    console.log("Nome Invalido")
}else{
    let classe;
switch(cliente.orcamento){
    case 1:
        classe = "Economico" 
        break;
    case 2: 
        classe = "Moderado"
        break;
    case 3:
        classe = "Luxo"
        break;
}; // esta estrutura verifica qual a classe do usuario e atribui um valor de string de acordo a escolha.

let resp1;
let resp2;
let resp3;

if(cliente.orcamento > 3 || cliente.orcamento <= 0){
    console.log("Opção inválida. Encerrando o formulário.") 
}else{
    console.log(`\nOlá, ${cliente.nomeViajante}! Vamos encontrar o destino perfeito para você.`) 
    console.log(`\nQual tipo de clima você prefere?`)
    console.log(1, "Tropical / Quente")
    console.log(2, "Frio / Neve")
    console.log(3, "Temperado / Ameno"); 

    resp1 = lerTeclado.questionInt("Digite o numero da sua escolha: ") 

    switch(resp1){
        case 1:
            console.log("Você prefere")
            console.log(1, "Praia e mar")
            console.log(2, "Floresta e ecoturismo") 
            resp2 = lerTeclado.questionInt("\nDigite o numero de sua escolha: ")
            if(resp2 > 2 || resp2 <= 0){
                console.log("Opção inválida. Encerrando o formulário.")
            } // estrutura criada para informar ao usuario que a opcao escolhida é invalida.
            break;
        case 2:
            console.log("Você prefere")
            console.log(1, "Neve de verdade")
            console.log(2, "Frio sem neve")
            resp2 = lerTeclado.questionInt("\nDigite o numero de sua escolha: ")
            if(resp2 > 2 || resp2 <= 0){
                console.log("Opção inválida. Encerrando o formulário.")
            }
            break;
        case 3:
            console.log("Você prefere:")
            console.log(1, "Cultura, museus e arquitetura histórica")
            console.log(2, "Natureza, trilhas e parques nacionais")
            resp2 = lerTeclado.questionInt("\nDigite o numero de sua escolha: ")
            if(resp2 > 2 || resp2 <= 0){
                console.log("Opção inválida. Encerrando o formulário.")
            }
            break;
        default:
            console.log("Opção inválida. Encerrando o formulário.")
    
    }

};


    let destino;

    if(resp1 === 1 && resp2 === 1){ 
    console.log("Como você prefere sua viagem?")
    console.log(1, "Animada — praias badaladas e muito agito")
    console.log(2, "Tranquila — sossego e natureza preservada")
    resp3 = lerTeclado.questionInt("\nDigite o numero de sua escolha: ")
    }else if(resp1 === 1 && resp2 === 2){
        destino = "Amazônia (Brasil) ou Costa Rica"
    }else if(resp1 === 2 && resp2 === 1){
        console.log("Qual é o seu objetivo? ")
        console.log(1, "Praticar esportes de inverno (esqui, snowboard)")
        console.log(2, "Contemplar a paisagem nevada e relaxar")
        resp3 = lerTeclado.questionInt("\nDigite o numero de sua escolha: ")
    }else if(resp1 === 2 && resp2 === 2){
        destino = "Serra Gaúcha (Brasil) ou Patagônia Chilena"    
    }else if(resp1 === 3 && resp2 === 1){
        console.log("Qual região você prefere?")
        console.log(1, "Europa")
        console.log(2, "America do Sul")
        resp3 = lerTeclado.questionInt("\nDigite o numero de sua escolha: ")
    }else if(resp1 === 3 && resp2 === 2){
        destino = "Chapada dos Veadeiros ou Torres del Paine"
    }; // estrutura criada para armazenar dados do usuario "resposta 3" em relacao ao destino.

    if(resp1 === 1 && resp2 === 1 && resp3 === 1 ){
        destino = "Cancún (México) ou Fortaleza (Brasil)"
    }else if(resp1 === 1 && resp2 === 1 && resp3 === 2){
        destino = "Maldivas ou Fernando de Noronha (Brasil)"
    }else if(resp1 === 1 && resp2 === 2){
        destino = "Amazônia (Brasil) ou Costa Rica"
    }else if(resp1 === 2 && resp2 === 1 && resp3 === 1){
        destino = "Aspen (EUA) ou Bariloche (Argentina)"
    }else if(resp1 === 2 && resp2 === 1 && resp3 === 2){
        destino = "Ushuaia (Argentina) ou Lapônia (Finlândia)"
    }else if (resp1 === 2 && resp2 === 2){
        destino = "Serra Gaúcha (Brasil) ou Patagônia Chilena"
    }else if(resp1 === 3 && resp2 === 1 && resp3 === 1){
        destino = "Lisboa, Barcelona ou Roma"
    }else if(resp1 === 3 && resp2 === 1 && resp3 === 2){
        destino = "Buenos Aires, Cusco ou Cartagena"
    }else if(resp1 === 3 && resp2 === 2){
        destino = "Chapada dos Veadeiros ou Torres del Paine"
    }; // estrutura criada para atribuir valor a variavel "DESTINO" de acordo com o caminho de opcoes do usuario.

    if(destino !== undefined){
        console.log
    (  `==============================================================================
    |    RECOMENDAÇÃO DA AGÊNCIA VOYAGER                                             
    |   ==============================================================================
    |   •Viajante : ${cliente.nomeViajante}                                           
    |   •Idade    : ${cliente.idadeViajante} anos                                     
    |   •Orçamento: ${classe}                                                         
    |   •Destino  : ${destino}                                                        
    ===============================================================================
    Boa viagem, ${cliente.nomeViajante}! O destino ${destino} espera por você.`);

    }; // estrutura condicional criada para mostrar a tela final ao usuario caso o destino seja diferente de "UNDEFINED".

    let dica;

    switch(cliente.orcamento){
        case 1: 
            dica = "Dica: procure voos com antecedência e use hostels ou Airbnb!"
            break;
        case 2:
            dica = "Dica: hotéis 3 estrelas e pacotes combinados são ótimas opções!"
            break;
        case 3:
            dica = "Dica: resorts all-inclusive e voos executivos são a sua praia!"
            break;
    };//Estrutura criada para atender a BONUS e atribuir valor a variavel "DICA"

    if(destino !== undefined){
        console.log(`\n${dica}`)      
    };
}


//  PROBLEMAS:
// 1. mesmo com a opção invalida o código de dica roda independente da opção algo que não deveria acontecer = CORRIGIDO
// 2. não tem limitador de idade algo que poderia ser corrigido mas que dificilmente daria problema = CORRIGIDO
// 3. se voce da enter no nome do código é possível continuar e o usuário nao terá nome = CORRIGIDO
// 4. o código nao possui ; depois do ) em sua maioria o que poderia gerar algum problema = CORRIGIDO
// 5. a dica quando o numero nao se encaixa em 1 a 3 ela da undefined = CORRIGIDO
// 6. quando colocados vários números da infinity number = REFUTADO PELO PROFESSOR

// ELOGIOS:
// 1. o código realmente para quando voce digita algo "errado" e da a mensagem de opção invalida
// 2. o código esta legível só acho que esta grande
// 3. e o resultado esta visivelmente bonito