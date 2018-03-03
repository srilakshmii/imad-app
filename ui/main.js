var a=document.getElementById("counter");

a.onclick =function()
{
   
   var request=new XMLHttpRequest();
   request.onreadystatechange=function(){
       if (request.readyState== XMLHttpRequest.Done)
       {
           if(request.status==200)
           {
               var counter=request.responseText;
               var b=document.getElementById("count");
               b.innerHTML=counter.toString();
           }
       }
   }
   request.open('GET','http://u610sssg.imad.hasura-app.io/counters',true);
   request.send(null);
   
   
}


