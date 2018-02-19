console.log('Loaded!');
alert('Hi welcome to my site');
var img=document.getElementById("image");
function moveRight(){
    marginleft=marginleft+5;
    img.style.marginleft=marginleft+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};