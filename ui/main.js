console.log('Loaded!');
alert('Hi welcome to my site');
var img=document.getElementById("image");
function moveRight(){
    var marginLeft=margineLeft+5;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight(),50);
};