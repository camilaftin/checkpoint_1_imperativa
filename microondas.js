/* declaracao das variaveis */ 
let tempo;
let opcao;
let padrao;


/* criacao das funcoes para cada prato */
function pipoca(tempo){
  padrao = 10;
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

function macarrao(tempo){
  padrao = 8;
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

function carne(tempo){
  padrao = 15;
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

function feijao(tempo){
  padrao = 12;
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

function brigadeiro(tempo){
  padrao = 8
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

/* Menu Inicial do microondas */
console.log("Olá seja bem-vindo ao menu do microondas super veloz!!!\n");

console.log("1 - Pipoca - 10 segundos\n" + 
            "2 - Macarrão - 8 segundos\n" +
            "3 - Carne - 15 segundos\n" +
            "4 - Feijão - 12 segundos\n" +
            "5 - Brigadeiro - 8 segundos\n"
            );

/*opcoes do menu e chamada da funcao*/
switch(opcao){
  case 1: pipoca(tempo);
  break;
  case 2: macarrao(tempo);
  break;
  case 3: carne(tempo);
  break;
  case 4: feiajo(tempo);
  break;
  case 5: brigadeiro(tempo);
  break;
  default: console.log("Prato inexistente");
}

/* informar aqui a opcao e o tempo desejado*/
opcao = 3;
tempo = 15;



