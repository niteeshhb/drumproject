var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 var b=this.innerHTML;
 makesound(b);
 buttonanimation(b);
 
});
}
document.addEventListener("keypress",function(event)
{
	makesound(event.key);
	buttonanimation(event.key);
});
function makesound(key)
{
	switch(key){
 	case "w":
 	var t1=new Audio("sounds/tom-1.mp3");
   t1.play();
   break;

   	case "a":
 	var t2=new Audio("sounds/tom-2.mp3");
   t2.play();
   break; 

   case "s":
 	var t3=new Audio("sounds/tom-3.mp3");
   t3.play();
   break;

   case "d":
 	var t4=new Audio("sounds/tom-4.mp3");
   t4.play();
   break;
   case "j":
 	var snare=new Audio("sounds/snare.mp3");
   snare.play();
   break;

   case "k":
 	var kick=new Audio("sounds/kick-bass.mp3");
   kick.play();
   break;

   case "l":
 	var crash=new Audio("sounds/crash.mp3");
   crash.play();
   break;

   default:console.log(b);
}
}
 //var audio=new Audio("sounds/crash.mp3");
   //audio.play();
   function buttonanimation(ckey)
   {
   	var active=document.querySelector("."+ckey);
   	active.classList.add("pressed");

   	 setTimeout(function()
   {
      active.classList.remove("pressed");
   },100);
   }
   