//Q1

 var base = prompt("Enter a number :");
 var exponent = prompt("Enter a power :");
function power(base, exponent) {
	var result = 1;
	if(exponent == undefined)
		exponent = 2;
	for(var i=1; i<=exponent; i++) {
		result = result * base;
	}
	return result;
}
document.write(power(base,exponent) + "<br>");

 
//Q2

var year = prompt("Enter any year:");
function leapyear(year)
{
    if (year % 400 == 0) {

        document.write(year + " is a leap year"+ "<br>");
     }
     
     else if (year % 100 == 0) {
        document.write(year + " is not a leap year"+ "<br>");
     }
     
     else if (year % 4 == 0) {
        document.write(year + " is a leap year"+ "<br>");
     }
     
     else {
        document.write(year + " is not a leap year"+ "<br>");
     }
}

 leapyear(year);


 //Q3

var a = 4;
var b = 5;
var c = 8; 

function cal_s(a, b, c){
 
    return (a + b + c)/2;
}

var x = cal_s(a, b, c);

function area(a, b, c, x){

   return Math.sqrt(x*((x-a)*(x-b)*(x-c))); 
}

document.write("The area = " + area(a, b, c, x) + "<br>");

// Q4

var x = prompt("Enter marks of student 1", "0");
var y = prompt("Enter marks of student 2", "0");
var z = prompt("Enter marks of student 3", "0");

var a = parseInt(x);
var b = parseInt(y);
var c = parseInt(z);

function average(a, b, c){
    var num = a+b+c;
 document.write("The average is: "+ (num/3) + "<br>");
}

function percentage(a, b, c){
    var num = a+b+c;
  document.write("The percentage is: "+(num/300)*100 + "<br>");
}

function main(){
    average(a, b, c);
    percentage(a, b, c);
}
main();

//Q5

var str  = prompt("Enter any string : ");
var letters = prompt("Enter letter to find its position : ");
function ind(str,letters){
    var pos;
    for (var i=0;i<str.length;i++){
        if (letters==str[i]){
            pos = i;
            return pos;

        }
    }
}
var fin = ind(str, letters);
document.write(" The position of " + letters + " is "+ fin + "<br>" );

//Q6 

var string = "hello world";
var vowel = ["a", "e", "i", "o", "u"];

String.prototype.character = function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
                j--;           
                secondLoop--;  
            }

        }
    }
}

string.character();
document.write(string);


//Q7 

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }
    
    return count;
  }
  
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
  
  var found = findOccurrences();
  document.write("There are " + found + " number of occurrences of any two vowels");


//Q8 

var distance = prompt("Enter your distance in km : ");
function conMeter(distance){
    distance = (distance*1000);
    return distance;
}
function confeet(distance){
    distance = (distance*1000);
    return distance;
}
function conInches(distance){
    distance = (distance*1000);
    return distance;
}
function conCenteMeter(distance){
    distance = (distance*1000);
    return distance;
}
document.write("<br> "+conMeter(distance) + " meter. ");
document.write("<br> "+ confeet(distance )+ " feet. ");
document.write("<br> "+ conInches(distance)+ " inches. ");
document.write("<br> "+ conCenteMeter(distance)+ " centimeter. ");

//Q9

function over(){
var overTime = +prompt("Enter total working hours to calculate overtime : ");
var overTimePerHour = 12;
var extraPay = 0;
if (overTime>40){
    extraPay = (overTime-40)*12;
    document.write("<br>You got extra pay of " + extraPay + " Rupees");
}
else {document.write("<br> You don't got any extra pay. ")}
}
over();

//Q10 
var amount = prompt("Enter your amount to withdraw! : ");
var hun = parseInt(((parseInt(amount))/100));
var fif = parseInt((amount - (100*hun))/50);
var ten = parseInt(      (amount - ((100*hun)+(fif*50)) )/10     );
document.write("<br> You will have "+ hun + " hundred notes, "+ fif + " fifty notes, "+ ten+" ten notes");
