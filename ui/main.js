console.log('Loaded!');
alert('Hi welcome to my site');
var img=document.getElementById("image");
var marginLeft=0;
function moveRight(){
    marginLeft=margineLeft+5;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};