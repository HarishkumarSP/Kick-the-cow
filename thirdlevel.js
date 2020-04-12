 function L3cowMove() { 
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
  
   function L3cowMove2() { 
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
  
   function L3cowMove3() { 
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
   function L3menMove2() { 
    var pos = 0;
     var move = document.getElementById("men");
     var id = setInterval(men, 3); // interval of men moving speed
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
  
  //thief movement
  
   function L3thiefMove() { 
    var pos = 0;
     var move = document.getElementById("thief");
     var id = setInterval(thief, 9); // interval of thief moving speed
     function thief() {
       if (pos == 1000) {  // making the thief as long to move
         clearInterval(id);
       } 
       else {
         pos++;
         move.style.left = pos + 'px'; // thief started to come from left
         move.style.right = pos + 'px'; // towards right
       }
     }
   }
  
   function L3thiefMove2() { 
    var pos = 0;
     var move = document.getElementById("thief2");
     var id = setInterval(thief2, 6); // interval of thief moving speed
     function thief2() {
       if (pos == 1000) {  // making the thief as long to move
         clearInterval(id);
       } 
       else {
         pos++;
         move.style.left = pos + 'px'; // thief started to come from left
         move.style.right = pos + 'px'; // towards right
       }
     }
   }

//Scoring part
  
    function c11Score(){
      document.getElementById("cow").onclick= cow =>{
        score+=30;
        document.getElementById('cow').style.display="none";
        document.getElementById('score').innerHTML= score;
        mylevel3();
      }
     }
  
     
   function c2cScore(){
    document.getElementById("cow2").onclick= cow2 =>{
      score+=40;
      document.getElementById('cow2').style.display="none";
      document.getElementById('score').innerHTML= score;
      mylevel3();
    }
   }
  
   
   function c3cScore(){
    document.getElementById("cow3").onclick= cow3 =>{
      score+=60;
      document.getElementById('cow3').style.display="none";
      document.getElementById('score').innerHTML= score;
      mylevel3();
    }
   }
  
   function m2Score(){
    document.getElementById("men").onclick= men =>{
      score-=30;
      document.getElementById('score').innerHTML= score;
      mylevel3();
    }
   }
  
   
   function tScore(){
    document.getElementById("thief").onclick= thief =>{
      score-=40;
      window.location.href='end.html';
      document.getElementById('score').innerHTML= score;
      mylevel3();
    }
   }
   function t2Score(){
    score-=50;
    document.getElementById("thief2").onclick= thief2 =>{
      window.location.href='end.html';
      document.getElementById('score').innerHTML= score;
      mylevel3();
    }
   }
    
 //Levels changing according to the score
    
   function mylevel3(){
    if(score>80){
      window.location.href='win.html';
    }
    else{
      return 0;
    }
  }