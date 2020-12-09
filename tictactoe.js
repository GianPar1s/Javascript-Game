 
            function timeis(){
            var time = new Date();
            var hours = time.getHours();
            var min = time.getMinutes();
            var sec = time.getSeconds();
            var midday = "AM";
             midday = (hours >= 12) ? "PM" : "AM";
            hours = (hours == 0) ? 12 : ((hours > 12) ? (hours - 12): hours);
            hours = updateTime(hours);
        min = updateTime(min);
        sec = updateTime(sec);
         document.getElementById("tictactime").innerHTML = hours + ": " + min + ": " + sec + ": " + midday;
       setTimeout(timeis, 1000);
            }
        function updateTime(k){
if(k < 10){
    return "0" + k;
}
else {
return k;
}
     }
     timeis();
     
     window.onload = function(){

};

var countx= 0;
var count=0;
var counto=0;
var count_draws=0;
var player = 0;
var checkcheck= false;
var x= '<span class="fa fa-times"></span>';
var o= '<span class="fa fa-circle-o fa-4x"></span>';

function cell_click(cell){
  document.getElementById("result").innerHTML= "# result";
  var element= document.getElementById(cell);
 
   if(element.innerHTML != "") return;

    if(player == 1) {
        element.innerHTML = x;
        element.style.color= "#547cd8";
        player -= 1;
        ++count;
        winner ();
    } else {
        element.innerHTML = o;
        element.style.color= "#01bbc2";
        player += 1;
        ++count;
        winner ();
    }
}

function winner(){
  if(
//horizontal X
document.getElementById("cell_1").innerHTML == x && document.getElementById("cell_2").innerHTML == x && document.getElementById("cell_3").innerHTML == x || document.getElementById("cell_4").innerHTML == x  && document.getElementById("cell_5").innerHTML == x  && document.getElementById("cell_6").innerHTML == x || document.getElementById("cell_7").innerHTML == x  && document.getElementById("cell_8").innerHTML == x && document.getElementById("cell_9").innerHTML == x  ||

//vertical X  
document.getElementById("cell_1").innerHTML == x  && document.getElementById("cell_4").innerHTML == x  && document.getElementById("cell_7").innerHTML == x  || document.getElementById("cell_2").innerHTML == x  && document.getElementById("cell_5").innerHTML == x  && document.getElementById("cell_8").innerHTML == x  || document.getElementById("cell_3").innerHTML == x  && document.getElementById("cell_6").innerHTML == x  && document.getElementById("cell_9").innerHTML == x ||
//diagonal X
document.getElementById("cell_1").innerHTML == x  && document.getElementById("cell_5").innerHTML == x  && document.getElementById("cell_9").innerHTML == x || document.getElementById("cell_3").innerHTML == x  && document.getElementById("cell_5").innerHTML == x  && document.getElementById("cell_7").innerHTML == x
    ){
document.getElementById("result").innerHTML= "# X won";
    ++countx;
   document.getElementById("xx").innerHTML= countx +"&nbsp;" + "wins";  
   reset();
    count= 0;
   //  document.getElementById("result").innerHTML= "result";
  } else if (
//horizontal O
document.getElementById("cell_1").innerHTML == o  && document.getElementById("cell_2").innerHTML == o && document.getElementById("cell_3").innerHTML == o || document.getElementById("cell_4").innerHTML == o && document.getElementById("cell_5").innerHTML == o && document.getElementById("cell_6").innerHTML == o || document.getElementById("cell_7").innerHTML == o && document.getElementById("cell_8").innerHTML == o && document.getElementById("cell_9").innerHTML == o ||
//vertical O  
document.getElementById("cell_1").innerHTML == o && document.getElementById("cell_4").innerHTML == o && document.getElementById("cell_7").innerHTML == o || document.getElementById("cell_2").innerHTML == o && document.getElementById("cell_5").innerHTML == o && document.getElementById("cell_8").innerHTML == o || document.getElementById("cell_3").innerHTML == o && document.getElementById("cell_6").innerHTML == o && document.getElementById("cell_9").innerHTML == o ||
//diagonal O
document.getElementById("cell_1").innerHTML == o && document.getElementById("cell_5").innerHTML == o && document.getElementById("cell_9").innerHTML == o || document.getElementById("cell_3").innerHTML == o && document.getElementById("cell_5").innerHTML == o && document.getElementById("cell_7").innerHTML == o
    ){
   
  document.getElementById("result").innerHTML= "# O won";
    ++counto;
  document.getElementById("ooo").innerHTML=  counto +"&nbsp;" + "wins"; 
    reset();
    count=0;
    //document.getElementById("result").innerHTML= "result";
  }

else if (count == 9){
    ++count_draws;
    document.getElementById("draw0").innerHTML=  count_draws +"&nbsp;" + "draws";
   document.getElementById("result").innerHTML= "# draw";
    reset();
   count = 0;
  
  // document.getElementById("result").innerHTML= "result";
}
}

function reset (){
  //reset buttons to empty

  document.getElementById("cell_1").innerHTML = "";
  document.getElementById("cell_2").innerHTML = "";
  document.getElementById("cell_3").innerHTML = "";
  document.getElementById("cell_4").innerHTML = "";
  document.getElementById("cell_5").innerHTML = "";
  document.getElementById("cell_6").innerHTML = "";
  document.getElementById("cell_7").innerHTML = "";
  document.getElementById("cell_8").innerHTML = "";
  document.getElementById("cell_9").innerHTML = "";
  count=0;
};

function switchxo(){
  reset();
  var check= document.getElementById("myCheckBox").checked;
 
   if(!checkcheck){
     player = 1;

   } else {
     player = 0;
   }
checkcheck = !checkcheck;
};

function button(){
  var b= document.getElementById("butt_reset");
  b.classList.toggle("active", 200);
}
        
