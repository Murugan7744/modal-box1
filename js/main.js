


var buttons=document.getElementById("button");

var card=document.getElementById("card");
var icon=document.getElementById("icon-1");
var para=document.getElementById("para");
var blur=document.getElementById("blur");

buttons.addEventListener("click",function(){
      card.style.display="block";
      blur.style.display="block";

      
})

var upload=document.getElementById("upload");


upload.addEventListener("click",function(){
      para.style.display="block";
})
icon.addEventListener("click",function(){
      card.style.display="none";
      para.style.display="none";
      blur.style.display="none";
})
