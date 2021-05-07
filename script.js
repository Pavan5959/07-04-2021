//meduim
function medium()
{
  
   var img_1 = document.getElementById("brown");
   if(img_1.src.match("images/lightbrown.png"))
   {
      img_1.src="images/cbdflawless.png";
      
   }
   else if(img_1.src.match("images/cbdflawless.png"))
   {
      img_1.src="images/brown.png";
   }
   else{
     img_1.src="images/lightbrown.png";
   }
}
//Candy Kush
function candykush()
{
   var img_2 = document.getElementById("lippaint");
   if(img_2.src.match("images/cbdlippaint.png"))
   {
      img_2.src="images/rasberry.png";
   }
  else if(img_2.src.match("images/rasberry.png"))
  {
     img_2.src="images/slayall.png";
  }
  else if(img_2.src.match("images/slayall.png"))
  {
     img_2.src="images/flossy.png";
  }
  else
  {
      img_2.src="images/cbdlippaint.png";
  }

}
//sunsetbloom
function sunsetbloom()
{
   var img_3 = document.getElementById("lipstick");
   if(img_3.src.match("images/redpaint.png"))
   {
      img_3.src="images/cbdlipstick.png";
   }
   else if(img_3.src.match("images/cbdlipstick.png"))
   {
      img_3.src="images/pinkpaint.png"; 
   }
   else
   {
      img_3.src="images/redpaint.png";
   }

}
