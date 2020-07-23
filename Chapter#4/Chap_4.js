
////Chap 5
////Task 1:
document.write(" <h3> <b>  Task 1:  </h3> </b>" );
var a = 5;
document.write("First num is " +a+ "<br>");
var b = 3;
document.write("Second num is " +b+ "<br>");
var c = a+b;
document.write("Sum of 5+3 is " +c+ "<br> <br>");

//Task 2:
document.write(" <h3> <b> Airthmetic Operations  </h3> </b>" );
var a = 5;
document.write("First num is " +a+ "<br>");
var b = 3;
document.write("Second num is " +b+ "<br>");
var c = a-b;
document.write("Sub of 5-3 is " +c+ "<br> <br>");


var a = 5;
document.write("First num is " +a+ "<br>");
var b = 3;
document.write("Second num is " +b+ "<br>");
var c = a*b;
document.write("Mul of 5*3 is " +c+ "<br> <br>");


var a = 15;
document.write("First num is " +a+ "<br>");
var b = 3;
document.write("Second num is " +b+ "<br>");
var c = a/b;
document.write("Div of 15/3 is " +c+ "<br> <br>");

var a = 5;
document.write("First num is " +a+ "<br>");
var b = 3;
document.write("Second num is " +b+ "<br>");
var c = a%b;
document.write("Mul of 3%5 is " +c+ "<br> <br>");


//Task 3:
document.write(" <h3> <b> JS Mathematical Operations  </h3> </b>" );
document.write("Value after variable declaration is Undefine ?? <br>");

document.write("Initial Value is 5 <br>");

document.write("The Value of variable after increment is 6 <br>");

document.write("The Value of variable after increment of 7 is 13 <br>");

document.write("The Value of variable after decrement is 12 <br> ");

document.write("The Remainder is 0 <br> <br>");

///Task 4:
document.write(" <h3> <b> Cost of movie tickets  </h3> </b>" );
var price = "1000";
c = 5*price;
document.write(c);

///Task 5:
document.write(" <h3> <b> Table of 4 </h3> </b>" );
for(var i=1; i<=10; i++)
{
    document.write(" <br>  <br> 4" + "x" + i + "=" + 4*i + "<br> <br>")
}


///Task 6:
document.write(" <h3> <b> Temp Conversion  </h3> </b>" );
var c = 25;
var f = 70;
document.write(c+" °c is "+ ((c*(9/5))+32)+ " °f <br>");
document.write(f +" °f is " + ((f-32)*(5/9)) + " °c <br> <br>");


///Task 7:
document.write(" <h3> <b> Shopping Cart </h3> </b>" );
var a = 650;
document.write("price of item 1 is " + a + "<br>");
var b = 3;
document.write("quanti of item 1 is " + b + "<br>");
var c = 100;
document.write("price of item 2 is " + c + "<br>");
var d = 7;
document.write("quantity of item 2 is " + d + "<br>");
var e = 100;
document.write("Shipping charges  is " + e + "<br>");
var f = (a*b)+(c*d)+e;
document.write("Total cost of your order  is " + f + "<br> <br>");


///Task 8:
document.write(" <h3> <b> Mark Sheet </h3> </b>" );
var a = 980;
document.write("Total marks: " + a + "<br>");
var b = 804;
document.write("Obtained marks: " + b + "<br>");
var per = (b*100)/a;
document.write("Total marks: " + per + "<br> <br>");


////Task 9 :
document.write(" <h3> <b> Currency To PKR  </h3> </b>" );
var c = (104*10)+(28*25);
document.write("Total Currency in PKR is " + c + "<br> <br> <br>");



////Task 10:
document.write(" <h3> <b> Calculations in a single expression   </h3> </b>" );
var z = 5+(10/2);
document.write("Total: " +z+ "<br><br><br>");


////Task 11:
document.write(" <h3> <b> Age calculator  </h3> </b>" );
var a = 2020;
document.write("Current year " +a+ "<br>");

var b = 2000;
document.write("Birth year " +b+ "<br>");

var c = a-b
document.write("Your age is  " +c+ "<br>");


////Task 12:
document.write(" <h3> <b> Geometrizer  </h3> </b>" );
var Radius = 20;
        var pi = 3.142;
        var COC = 2 * pi * Radius;
        var Area = pi * Radius * Radius;


        document.write("Radius of Circle is : " + String(Radius));
        document.write("<br>");

        document.write("Circumference of Circle is : " + String(COC));
        document.write("<br>");

        document.write("Area of Circle is : " + String(Area));
        document.write("<br>");


/////Task 13:
document.write(" <h3> <b> Supply Calculator  </h3> </b>" );
FavSnack = "Chocolate Chip";
CUrrectAge = 15;
EstimatedAge = 65;
AmoutOFSnacks = 3;


TOtalSNacks = (EstimatedAge - CUrrectAge) * AmoutOFSnacks;
document.write("Favoriate Snacks is : " + FavSnack + "<br>")
document.write("Estimated Age is : " + EstimatedAge + "<br>")
document.write("Current Age   is : " + CUrrectAge + "<br>")
document.write("Amount of Snacks Per day is : " + AmoutOFSnacks + "<br>")

document.write("You Will Need " + String(TOtalSNacks) + "  " + FavSnack + " to Last your untill the riped old age of " + EstimatedAge);









