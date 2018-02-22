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
var nameval=document.getElemetById("name");
var name=nameval.value;
var submit=document.getElementById("submit");
submit.onclick = function(){
      var names=['saravanana','ragul','sasi'];
      var list='';
      for(var i=0;i<names.length;i++){
          list=list+"<li>"+names[i]+"</li>";
      }
      var ul=document.getElementById("ul");
      ul.innerHTML=list;
};