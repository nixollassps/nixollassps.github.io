let atropelaVacaD = false;
let atropelaVacaE = false;

 function atropelamento(){
  for(let i=0; i<imgCarro.length; i++){
    
    atropelaVacaD = collideRectRect(xVacaD, yVacaD, 28, 28,xCarro[i],yCarro[i], 50, 30); 
    
    if(atropelaVacaD){
      //churrasco natural
      yVacaD = 367;
      if(placarVacaD > 0 )//EVITAR PLACAR NEGATIVO
        placarVacaD -= 1;
      atropelou.play();
    }
    
    atropelaVacaE=  collideRectRect(xVacaE, yVacaE, 28, 28,xCarro[i],yCarro[i], 50, 30); 
    
    if(atropelaVacaE){
      yVacaE = 367; 
      if(placarVacaE > 0)//EVITAR PLACAR POSITIVO
        placarVacaE -=1;
      atropelou.play();
    
       
    }
  }//for   
}//atropelamento