var a=document.getElementById("counter");
var counter=0;
a.onclick =function()
{
   counter=counter+1;
   var b=document.getElementById("count");
   b.innerHTML=counter.toString();
   
}


