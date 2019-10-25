//Variáveis para as imagens
let imgEstrada;
let imgvaca;
let imgCarro = [];

//Variáveis de movimento
let yVacaD = 368;
let yVacaE = 368;    

let xVacaD = 150;
let xVacaE = 450;

//Variaveis dos Carros
//             Direita     /   Esquerda
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 220, 270, 330];
let velocidadeCarro = [3, 5, 7, 3, 5, 7];

//placar
let placarVacaD  = 0;
let placarVacaE  = 0;



function preload(){
 imgEstrada = loadImage('imagens/estrada.png');
 imgVaca = loadImage('imagens/ator-1.png');
  //Carros Sentidos Norte
 imgCarro[0] = loadImage('imagens/carro-1.png');
 imgCarro[1] = loadImage('imagens/carro-2.png');
 imgCarro[2] = loadImage('imagens/carro-3.png');
  //Carros Sentidos Sul
 imgCarro[3] = loadImage('imagens/carro-4 .png');
 imgCarro[4] = loadImage('imagens/carro-5 .png');
 imgCarro[5] = loadImage('imagens/carro-6.png');
  //SOM
  ponto = loadSound('sons/pontos.wav');
  atropelou = loadSound('sons/colidiu.mp3');
  trilha = loadSound('sons/trilha.mp3');
}   