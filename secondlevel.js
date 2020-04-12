function L2cowMove() { 
    var pos = 0;
     var move = document.getElementById("cow");
     var id = setInterval(cow, 9); // interval of cow moving speed
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
  
   function L2cowMove2() { 
    var pos = 0;
     var move = document.getElementById("cow2");
     var id = setInterval(cow2, 7); // interval of cow2 moving speed
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
  
   function L2cowMove3() { 
    var pos = 0;
     var move = document.getElementById("cow3");
     var id = setInterval(cow3, 5); // interval of cow3 moving speed
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

// men movement
   function L2menMove() { 
    var pos = 0;
     var move = document.getElementById("men");
     var id = setInterval(men, 12); // interval of men moving speed
     function men() {
       if (pos == 950) {  // making the men as long to move
         clearInterval(id);
       } 
       else {
         pos++;
         move.style.left = pos + 'px'; // cows started to come from left
         move.style.right = pos + 'px'; // towards right
       }
     }
   }
  
  //women movement
  
   function L2womenMove() { 
    var pos = 0;
     var move = document.getElementById("women");
     var id = setInterval(women, 10); // interval of women moving speed
     function women() {
       if (pos == 950) {  // making the women as long to move
         clearInterval(id);
       } 
       else {
         pos++;
         move.style.left = pos + 'px'; // women started to come from left
         move.style.right = pos + 'px'; // towards right
       }
     }
   }

//scoring part
function c1Score(){
    document.getElementById("cow").onclick= cow =>{
      score+=20;
      document.getElementById('cow').style.display="none";
      document.getElementById('score').innerHTML= score;
    }
    mylevel2();
   }
  
   
   function c22Score(){
    document.getElementById("cow2").onclick= cow2 =>{
      score+=30;
      document.getElementById('cow2').style.display="none";
      document.getElementById('score').innerHTML= score;
    }
    mylevel2();
   }
  
   
   function c33Score(){
    document.getElementById("cow3").onclick= cow3 =>{
      score+=40;
      document.getElementById('cow3').style.display="none";
      document.getElementById('score').innerHTML= score;
    }
    mylevel2();
   }
  
   
    function mScore(){
     document.getElementById("men").onclick= men =>{
       score-=10;
       document.getElementById('score').innerHTML= score;
     }
     mylevel2();
    }
   
    
    function wScore(){
     document.getElementById("women").onclick= women =>{
       score-=20;
       document.getElementById('score').innerHTML= score;
     }
     mylevel2();
    }

 //Levels changing according to the score

   function mylevel2(){
    if(score>60){
      window.location.href='third.html';
    }
    else{
      return 0;
    }
  }