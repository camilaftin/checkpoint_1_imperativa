/* declaracao de variaveis */
let opcao;
let tempo;
let padrao;

//fiz o uso do prompt pesquisando seu uso pela internet através do link https://www.npmjs.com/package/prompt-sync. Único uso que fiz, além da ajuda da documentação para compreender seu uso
const prompt = require('prompt-sync')(); 

/* Menu Inicial do microondas */
console.log("Olá seja bem-vindo ao menu do Microondas hiper-mega-veloz!!!\n" +
            "Menu:");
console.log("Opcao | Comida     | Tempo")
console.log("  1   | Pipoca     | 10 segundos\n" + 
            "  2   | Macarrão   | 8 segundos\n" +
            "  3   | Carne      | 15 segundos\n" +
            "  4   | Feijão     | 12 segundos\n" +
            "  5   | Brigadeiro | 8 segundos\n");

//opcao de escolha do usuario
opcao = prompt("Escolha sua opcao de acordo com o menu: ");

//nessa parte terá as opcoes escolhidas pelo usuario, com chamada para a função de alterar o tempo
switch(opcao){
  case "1": tempo = prompt("Informe o tempo desejado em segundos: ");
  padrao = 10;
  alterarTempo(tempo, padrao);
  break;
  case "2": tempo = prompt("Informe o tempo desejado em segundos: ");
  padrao = 8;
  alterarTempo(tempo, padrao);
  break;
  case "3": tempo = prompt("Informe o tempo desejado em segundos: ");
  padrao = 15;
  alterarTempo(tempo, padrao);
  break;
  case "4": tempo = prompt("Informe o tempo desejado em segundos: ");
  padrao = 12;
  alterarTempo(tempo, padrao);
  break;
  case "5": tempo = prompt("Informe o tempo desejado em segundos: ");
  padrao = 8;
  alterarTempo(tempo, padrao);
  break;
  default: console.log("Prato inexistente");
}

//função que altera o tempo de cozimento
function alterarTempo (tempo, padrao){
  if(tempo > (3*padrao)){
    console.log("Kabumm");
  } else if(tempo > (2*padrao) && tempo < (3*padrao)){
    console.log("Comida queimou");
  } else if(tempo < padrao){
    console.log("Tempo insuficiente");
  } else{
    console.log("Comida pronta. Bon appetit!!!");
  }  
}