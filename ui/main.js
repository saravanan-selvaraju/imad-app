console.log('Loaded!');
var img=document.getElementById("image");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
var submit=document.getElementById('submit');
submit.onclick = function(){
      var request=new XMLHttpRequest();
      request.onreadystatechange=function(){
          if(request.readyState== XMLHttpRequest.DONE){
            if(request.status==200){
                  var n=request.responseText;
                  n=JSON.parse(n)
                  var list='';
                  for(var i=0;i<n.length;i++){
                      list=list+'<li>'+n[i]+'</li>';
                  }
                  var ul=document.getElementById('ul');
                  ul.innerHTML=list;            
            }      
          }
      };
          
    var nameval=document.getElementById('name');
    var names=nameval.value;
      request.open('GET','http://saravanansdev.imad.hasura-app.io/submit-name?name='+names,true);
      request.send(null);
    
};