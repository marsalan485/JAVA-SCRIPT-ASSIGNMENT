//  Chapter 53-58
//  Task Number :1

var imgPathArr = ["images/others/1.jpg","images/others/3.jpg","images/others/4.png","images/others/13.jpg"];
var modal = document.getElementById("modal");
var imgInner = document.getElementById("modal-img")

var a;

var imgAr = document.getElementById("imgAr");
for (var i=0;i<=imgPathArr.length-1;i++){
    a = "onOpenImage("+i+")";
    imgAr.innerHTML += "<img class='format'id='"+i+"'src='"+imgPathArr[i]+"'onclick='"+a+"'></img>"

}
function onOpenImage(i){
    var imgId = document.getElementById(i);
    imgInner.src = imgPathArr[i];
    modal.className ="modal modal-open";
    
}
function onCloseImage(){
    modal.className = "modal-close ";
    setTimeout(timer,550);
}
function timer(){
    imgInner.src ="";
}

//  Task Number : 2
var para = document.getElementById("para");
var size = 10;
function fontIncrease(){

    para.style.fontSize =(size+"px");
    size+=10;
}
function fontDecrease(){

    para.style.fontSize =(size+"px");
    size=size-10;
}
