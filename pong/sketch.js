let tocouMinhaRaquete = false;
let tocouRaqueteOponente = false;

//dimensões da tela
let alturaTela = 600;
let larguraTela = 1280;
let metadeTela = larguraTela/2;

//Variáveis em Javascript da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadeX = 11;
let velocidadeY = 11;
let raio = diametro / 2;
let aumentoVelocidade = 1.5;


//Variáveis das raquetes
let velocidadeRaquete = 20;
let alturaRaquete = 110;
let larguraRaquete = 10;

let xMinhaRaquete = larguraTela - larguraRaquete;
let yMinhaRaquete = alturaTela/2 - alturaRaquete/2;

let xRaqueteOponente = 0;
let yRaqueteOponente = alturaTela/2 - alturaRaquete/2;

//Placar
let meuPlacar = 0;
let placarOponente = 0;



function preload(){
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura = "+largura);
  console.log("Altura = "+altura);
}

//Um looping sempre, desenha o que tem dentro
function draw() {
  background("Green");    
  stroke(255);
  strokeWeight(2);
  line(metadeTela,0,metadeTela,alturaTela);
  if(frameCount < 200) //10 segundos
    telaInicial();
  else
    jogar();  
}// Fim da função Draw

function telaInicial(){
  fill("White");
  rect(larguraTela/4,0 ,metadeTela, alturaTela);
  textAlign(CENTER);
  textSize(24);
  fill("Purple");
  text("Ping Pong do Nixollasps", metadeTela, alturaTela/2);
}

function jogar(){
  if(meuPlacar < 5 && placarOponente < 5){
    mostraBolinha();
    movimentaBolinha();
    detectaColisao();
    mostraRaquetes();
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    detectaColisaoBolinhaRaquetes();
    mostraPlacar();
  }  else{
    //Verifica e mostra campeão
    if(meuPlacar == 5)
      setasVenceu();
    else
      letrasVenceu();    
  }
}

function letrasVenceu(){
  fill("Red");
  rect(0,0,metadeTela,alturaTela);
  textSize(40);
  fill("White");
  textAlign(CENTER);
  text("Letras venceu",metadeTela/2, alturaTela/2);
}
function setasVenceu(){
  fill("Black");
  rect(metadeTela,0,larguraTela,alturaTela);
  textSize(40);
  fill("White");
  textAlign(CENTER);
  text("Setas venceu",metadeTela+metadeTela/2  ,altura/2);
}



function mostraPlacar(){
  textSize(30);
  
  fill("Black");
  text(meuPlacar, 3/4* larguraTela, 30);
  
  fill("Red");
  text(placarOponente, larguraTela/4, 30);
    
}

function detectaColisaoBolinhaRaquetes(){  
  //Colisão com a MinhaRaquete
  tocouMinhaRaquete = collideRectCircle(xMinhaRaquete,yMinhaRaquete, larguraRaquete, alturaRaquete, xBolinha , yBolinha, diametro);
  
      
  if(tocouMinhaRaquete){
    //Impede gol contra
    if(xBolinha > metadeTela && velocidadeX > 0){
        velocidadeX *= -1;
        somRaquetada.play();
  }
 }
  //Colisão com a Raquete do Oponente
  tocouRaqueteOponente = collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
  
    
   if(tocouRaqueteOponente){
    //Impede gol contra
    if(xBolinha < metadeTela && velocidadeX < 0){
        velocidadeX *= -1;
        somPonto.play();
    }
  } 
}


function movimentaRaqueteOponente(){
  //console.log("y: " + yMinhaRaquete);
  //console.log("x: "+ xMinhaRaquete);
  if(keyIsDown(87)){//W Para cima
    if(yRaqueteOponente > 0)//Teto
      yRaqueteOponente -= velocidadeRaquete;
  }
  if(keyIsDown(83)){//S Para baixo
    if(yRaqueteOponente < (alturaTela - alturaRaquete - 10))//Chão
      yRaqueteOponente += velocidadeRaquete;
  }
  if(keyIsDown(65)){//A Para esquerda
    if(xRaqueteOponente > 0)//Parede esquerda
      xRaqueteOponente -= velocidadeRaquete;
  }
  if(keyIsDown(68)){// D Para direita
    if(xRaqueteOponente < (metadeTela - larguraRaquete - 2))//Parede direita
      xRaqueteOponente += velocidadeRaquete;
  }
}

function movimentaMinhaRaquete(){
  //console.log("y: " + yMinhaRaquete);
  //console.log("x: "+ xMinhaRaquete);
  if(keyIsDown(UP_ARROW)){//Para cima
    if(yMinhaRaquete > 0)//Teto
      yMinhaRaquete -= velocidadeRaquete;
  }
  if(keyIsDown(DOWN_ARROW)){//Para baixo
    if(yMinhaRaquete < (alturaTela - alturaRaquete - 10))//Chão
      yMinhaRaquete += velocidadeRaquete;
  }
  if(keyIsDown(LEFT_ARROW)){//Para esquerda
    if(xMinhaRaquete > metadeTela)//Parede esquerda
      xMinhaRaquete -= velocidadeRaquete;
  }
  if(keyIsDown(RIGHT_ARROW)){//Para direita
    if(xMinhaRaquete < (larguraTela - larguraRaquete))//Parede direita
      xMinhaRaquete += 10;
  }
}

function mostraRaquetes(){
  fill("Black");
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  
  fill("Red");
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}

function mostraBolinha(){
  fill("White");
  noStroke();
  circle(xBolinha,yBolinha,diametro);
}//Fim mostra Bolinha

function movimentaBolinha(){
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}//Fim movimenta Bolinha

function detectaColisao(){
  // Colisão com as Bordas Laterais
  
  //Lado direito - Meu Lado
  if(xBolinha + raio >= largura){       
    velocidadeX *= -1;//velocidade * (-1)    
    placarOponente += 1;
    somPonto.play();
    velocidadeX -= aumentoVelocidade;
    velocidadeY -= aumentoVelocidade;
   
  }  
  //Lado esquerdo - Lado do Oponente
  if(xBolinha - raio <= 0){
    velocidadeX *= -1;//velocidade * (-1)    
    meuPlacar += 1;
    somPonto.play();
    velocidadeX += aumentoVelocidade;
    velocidadeY += aumentoVelocidade;
   
  }

  //Colisão com as bordas superior e inferior
  if(yBolinha + raio >= altura || 
     yBolinha - raio <= 0){
     velocidadeY *= -1;
  }
} //Fim detecta colisão