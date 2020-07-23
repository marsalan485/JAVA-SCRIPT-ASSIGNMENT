//  q1 at html
//  q2 at html 
//  q3 
function deleteRow(a){
 var name = document.getElementById(a);
  console.log(name.value);
  name.innerHTML = "";

}
//  q5
var num = 0;
function increase(){
    var inc = document.getElementById( "counter");
    inc.innerHTML = ++num ;
}
function decrease(){
    var inc = document.getElementById("counter");
    inc.innerHTML = --num ;
}