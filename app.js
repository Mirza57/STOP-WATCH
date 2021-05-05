
var min=0;
var sec=0;
var msec=0;
var interval;


var msecHeading=document.getElementById("msec");
var secHeading=document.getElementById("sec");
var minHeading=document.getElementById("min");

function time(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec>=100){
        sec++;
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }

}

function start(){

    interval= setInterval(time,10);


document.getElementById("btn1").disabled = true;
document.getElementById("btn4").disabled = true;

document.getElementById("btn1").style.backgroundColor="red";
document.getElementById("btn1").style.color="white";

document.getElementById("btn2").style.backgroundColor="lightgreen";
document.getElementById("btn2").style.color="white";

document.getElementById("btn3").style.backgroundColor="lightgreen";
document.getElementById("btn3").style.color="white";
}


function stop(){
    clearInterval(interval);
   
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn1").disabled = true;
    
    
    /* FUNCTIONALITY */
    document.getElementById("btn2").style.backgroundColor="red";
    document.getElementById("btn2").style.color="white";
    document.getElementById("btn1").style.backgroundColor="blanchedalmond";
    document.getElementById("btn1").style.color="grey";
    document.getElementById("btn4").style.backgroundColor="lightgreen";
    document.getElementById("btn4").style.color="white";
    document.getElementById("btn3").style.backgroundColor="lightgreen";
    document.getElementById("btn3").style.color="white";

   

}
function reset(){
    
      min=0;
      sec=0;
      msec=0;
     msecHeading.innerHTML=msec;
     secHeading.innerHTML=sec;
     minHeading.innerHTML=min;
     stop();
     

    document.getElementById("btn1").disabled = false;
    document.getElementById("btn4").disabled = false;   
    document.getElementById("btn3").style.backgroundColor="red";
    document.getElementById("btn3").style.color="white";
    document.getElementById("btn1").style.backgroundColor="lightgreen";
    document.getElementById("btn1").style.color="white";
    document.getElementById("btn2").style.backgroundColor="lightgreen";
    document.getElementById("btn2").style.color="white";
    document.getElementById("btn4").style.backgroundColor="lightgreen";
    document.getElementById("btn4").style.color="white";
    
}
function againStart(){

    interval=setInterval(time,10);
    document.getElementById("btn4").disabled = true;



    document.getElementById("btn4").style.backgroundColor="red";
    document.getElementById("btn4").style.color="white";
    document.getElementById("btn1").style.backgroundColor="blanchedalmond";
    document.getElementById("btn1").style.color="grey";
    document.getElementById("btn2").style.backgroundColor="lightgreen";
    document.getElementById("btn2").style.color="white";
    document.getElementById("btn3").style.backgroundColor="lightgreen";
    document.getElementById("btn3").style.color="white";
 
}





