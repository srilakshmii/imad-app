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
               var span=document.getElementById("counts");
               span.innerHTML=counter.toString();
           }
       }
   }
   request.open('GET','http://u610sssg.imad.hasura-app.io/counters',true);
   request.send(null);
 
   
   
}


