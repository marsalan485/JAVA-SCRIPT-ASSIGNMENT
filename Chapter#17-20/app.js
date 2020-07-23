////Task 1:
document.write("<h3> Task 1 </h3>");
var multiarr =  [ [] , [] , [] ]
/////aray declaration

//////Task 2:
document.write("<h3> Task 2 </h3>");
var multiarra2 = [ [0,1,2,3] + "<br>" + [1,0,1,2] + "<br>" + [2,1,0,1] ]
document.write(multiarra2);

////Task 3:
document.write("<h3> Task 3 </h3>");
var count = [0,1,2,3,4,5,6,7,8,9,10]
for (i=1; i<=10; i++)
{
    document.write(+i+ "<br> <br>")
}

////Task 4:
document.write("<h3> Task 4 </h3>");
var multiply = prompt("Enter tha number to show its multiplication")
var length = prompt("Enter length multiplication table ")
for(var i=1; i<=length; i++)
{
    document.write(multiply + "x" +i+ "*" +multiply*i+ "<br> <br>")
}

////Task 5:
document.write("<h3> Task 5 </h3>");
var fruits = ["apple", "banana", "mango", "orange","stawberry"];
var leng = fruits.length;
for (i=0; i<leng; i++)
{
    document.write(fruits[i] + "<br> <br>");
}

for (var i=0; i<leng; i++)
{
    document.write("Element at " +i+ "is " +fruits[i] + "<br> <br>");
}

////Task 6(a):
document.write("<h3> Task 6 </h3> ");
document.write("<h2> Even Counting </h2> ");
for (var i=1; i<=10; i++)
{
    if(i % 2 ==0)
    {
    document.write( +i+ ",");
    }
}

document.write("<h2> Counting </h2> ");
for (var i=1; i<=15; i++)
{
    document.write( +i+ ",");

}

////Task 6(b)
document.write("<h2> Reverse Counting </h2> ");
for (var i=1; i<=15; i++)
{
    document.write( +i+ ",");
    
}


/////Task 6(c)
document.write("<h2> Even Counting </h2> ");
for (var i=1; i<=10; i++)
{
    if(i % 2 ==0)
    {
    document.write( +i+ ",");
    }
}


/////Task 6(d)
document.write("<h2> Odd Counting </h2> ");
for (var i=1; i<=10; i++)
{
    if(i % 2 ==1)
    {
    document.write( +i+ ",");
    }
}

/////Task 6(e)
document.write("<h2> Series Counting </h2> ");
for (var i=1; i<=20; i++)
{
    if(i % 2 ==0)
    {
    document.write( +i+ "k,");
    }
}

/////Task 7:
document.write("<h3> Task 7 </h3> ");
var bakery = ["Cake", "Apple pie", "Cookies", "Brownies", "Pancakes"];
var search = prompt("Welcome to AQ bakery, What do you want to order???");
for (var i=0; i<bakery.length; i++)
{
    if (bakery[i] == search) {
        available = true;
        break;
    }
    else{
        available = false;
    }
}
 if(available == true)
 {
     document.write(search, "is available at index " +i+ "in our bakery");

 }
 if(available == false)
 {
     document.write("We are sorry, "  , search, " is not available in our bakery ");
     
 }


 ///////Task 8:
 document.write("<h3> Task 8 </h3>")
 num = [24,53,78,91,12];
 document.write("Array item: " , num);
 largeNumber = Math.max(24,53,78,91,12) ;
 document.write("<br> The Largest number is " +largeNumber+ "<br> <br>");


 ///////Task 9:
 document.write("<h3> Task 9 </h3>")
 num = [24,53,78,91,12];
 document.write("Array item: " , num);
 smallerNumber = Math.min(24,53,78,91,12) ;
 document.write("<br> The Smallest number is " +smallerNumber+ "<br> <br>");


 ///////Task 10:
 document.write("<h3> Task 10 </h3>");
  for(var i=1; i<=100; i++)
 {
     if(i % 5==0)
     {
       document.write( +i+ ", " );
     }
     
 }



