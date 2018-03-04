var a=document.getElementById("counter");

a.onclick =function()
{
   
   var request=new XMLHttpRequest();
   request.onreadystatechange=function(){
       if (request.readyState== XMLHttpRequest.DONE)
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
 
   
   
};


var nme=document.getElementById("name");
var name=nme.value;
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
   var names=['var1','var2','var3'];
   var list='';
   for(var i=0;i<=list.length;i++)
   {
       list+='<li>'+names[i]+'</li>';
       
   }
   var ul=document.getElementById("ul");
   ul.innerHTML=list;
   
    
};








