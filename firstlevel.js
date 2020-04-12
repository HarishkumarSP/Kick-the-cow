function L1cowMove() { 
    var pos = 0;
     var move = document.getElementById("cow");
     var id = setInterval(cow, 10); // interval of cow moving speed
     function cow() {
       if (pos == 915) {  // making the cow as long to move
         clearInterval(id);
         window.location.href='end.html';
       } 
       else {
         pos++;
         move.style.left = pos + 'px'; // cow started to come from left
         move.style.right = pos + 'px'; // towards right
       }
     }
   }
 
 
 function L1cowMove2() { 
   var pos = 0;
    var move = document.getElementById("cow2");
    var id = setInterval(cow2, 9); // interval of cow2 moving speed
    function cow2() {
      if (pos == 915) {  // making the cow2 as long to move
        clearInterval(id);
        window.location.href='end.html';
      } 
      else {
        pos++;
        move.style.left = pos + 'px'; // cow2 started to come from left
        move.style.right = pos + 'px'; // towards right
      }
    }
  }
 
  function L1cowMove3() { 
   var pos = 0;
    var move = document.getElementById("cow3");
    var id = setInterval(cow3, 8); // interval of cow3 moving speed
    function cow3() {
      if (pos == 915) {  // making the cow3 as long to move
        clearInterval(id);
        window.location.href='end.html';
      } 
      else {
        pos++;
        move.style.left = pos + 'px'; // cow3 started to come from left
        move.style.right = pos + 'px'; // towards right
      }
    }
  }

  // scoring part
  var score = 0;

 function cScore(){
  document.getElementById("cow").onclick= cow =>{
    score+=10;
    document.getElementById('cow').style.display="none";
    document.getElementById('score').innerHTML= score;
    mylevel();
  }
}

 function c2Score(){
  document.getElementById("cow2").onclick= cow2 =>{
    score+=20;
    document.getElementById('cow2').style.display="none";
    document.getElementById('score').innerHTML= score;
    mylevel();
  }
 }

 
 function c3Score(){
  document.getElementById("cow3").onclick= cow3 =>{
    score+=30;
    document.getElementById('cow3').style.display="none";
    document.getElementById('score').innerHTML= score;
    mylevel();
  }
 }

 //Levels changing according to the score
 
 function mylevel(){
    if(score>40){
    window.location.href='second.html';
    }
    else{
      return 0;
    }
  }