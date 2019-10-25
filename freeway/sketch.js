function setup() {
 createCanvas(600, 400);
  //trilha.loop();
  trilha.setVolume(0.2);
}
function draw() {
  if(frameCount > 300){// +/- 7s
    if(placarVacaD <=5 && placarVacaE <=5){
    jogar();

  }else
      verificaVencedor();
  }else{
    telaInicial();
  }

function verificaVencedor(){
  if(placarVacaE >=5)
    vacaSetaVencedor();//TF
  else
    vacaLetrasVencedor();//TF

}
function vacaSetaVencedor(){
  
  background("red");
  textStyle(BOLD);
  textAlign(CENTER);
  fill('white');
  textSize(20);
  text("VACA DA DIREITA VENCEU", 300, 90);
  image(imgVaca, 300 ,190, 200, 200);
  
} 

function vacaLetrasVencedor(){
  background("deepSkyBlue");
  textStyle(BOLD);
  textAlign(CENTER);
  fill('white');
  textSize(20);
  text("VACA DA ESQUERDA VENCEU", 200, 90);
  image(imgVaca, 200 ,190, 200, 200);
  
}


function telaInicial(){
  background("deepSkyBlue");
  textStyle(BOLD);
  textAlign(CENTER);
  fill('Chocolate');
  textSize(48);
  text("Free-Way", 300, 190);
  textSize(24);
  text("created by Nixollasps", 300,230);
  
}
function jogar(){
  background(imgEstrada);
  movimentarVaca();
  mostarVaca();
  mostarCarros();
  movimentaCarros();
  mostraPlacar();
  pontuar();
  atropelamento();
  
  }
}



