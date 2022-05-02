let turn1= false;
let turn2=false;
let dice;
let dices=[];
let firstplyr;
let secondplyr;
let a;
let score1=0;
let score2=0;

$(".setplayer").click(function(){
    gamersname();
    $(".title2 h3").text(firstplyr+" zar salla.");
    turn1=true;
    });

    $("#btn1").click(function(){
        if (turn1===true){
            dice="dice1"
        playsound();
       const diceturns= setInterval(diceturning,150);
       
      setTimeout(() => {
        clearInterval(diceturns);
        dices.push(a)     
      }, 1100);
     
      turn2=true;
      turn1=false;
      $(".title2 h3").text(secondplyr+" zar salla.");
      $("#btn2").click(function(){
        if (turn2===true){
            dice="dice2";
        playsound();
       const diceturns2= setInterval(diceturning,150);
       
      setTimeout(() => {
        clearInterval(diceturns2);
        dices.push(a)   ;
        checkAnswer();
      }, 1200) ;

     
      }
      turn2=false;
      turn1=true;
      setTimeout(function(){
        $(".title2 h3").text(firstplyr+" zar salla.");
      },3000 );
   
             })}
      
             })  ;


function gamersname(){
     firstplyr=prompt("1.Oyuncunun ismini giriniz");
  secondplyr=prompt("2.Oyuncunun ismini giriniz");

    $(".plyra h3").text(firstplyr);
    $(".plyrb h3").text(secondplyr);
    $(".firstname").text(firstplyr);
    $(".secondname").text(secondplyr);
   game= true;
}

function randomnumber(){
    let num= Math.ceil(Math.random()*6);
    return num;
}

function diceturning(){
 a=randomnumber(); 
        $("."+dice+" img").attr("src","images/dice"+a+".png");}
 
function playsound(){
    let sound=new Audio("sounds/dice.mp3");
    sound.play();}

    function checkAnswer(){
        if(dices[0]>dices[1]){
            $(".title2 h3").text(firstplyr+" oyunu kazandı!")
            score1++;
            $(".score1").text(score1);
        }else if(dices[0]<dices[1]){
            $(".title2 h3").text(secondplyr+" oyunu kazandı!")
            score2++;
            $(".score2").text(score2);
        }else {
            $(".title2 h3").text("Oyun berabere bitti :-)")
        }
       dices=[];

    }