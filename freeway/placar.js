
function pontuar() {
  if(yVacaD < 15){
    placarVacaD += 1;
    ponto.play();
    yVacaD = 368
  }
   if(yVacaE < 15){
    placarVacaE += 1;
     ponto.play();
    yVacaE = 368
  }
}
//pontuação
function mostraPlacar(){
  textSize(30);
  
  fill("red");
  text(placarVacaE, 450, 30);
  
  fill("blue");
  text(placarVacaD, 150, 30);
    
} 

