////Task 1:

document.write(" <h3> <b> Task 1  </h3> </b>" );
var a = prompt("Enter Any Char")
if( a<="Z" && a>= "A")
{
    document.write("This one is Uppercase")
}
if( a<="z" && a>= "a")
{
    document.write("This one is Lowercase")
}

////Task 2:

document.write(" <h3> <b> Task 2  </h3> </b>" );
 no1=+prompt("Enter a First Number");
 no2=+prompt("Enter a Second Number");

 if (no1>no2)
 {
     document.write(String(no1) + "  is Greater than " + String(no2));
 }

 else if (no1==no2){
     document.write(String(no1) + "  is equal to " + String(no2));
    
 }
 else{
 document.write(String(no2) + "  is Greater than " + String(no1));
 }

 ////Task 3:

 document.write(" <h3> <b> Task 3  </h3> </b>" );
 no1=+prompt("Enter a First Number");
         
 if (no1>0)
 {
     document.write(String(no1) + "  is Positive");
 }

 else if (no1<0){
     document.write(String(no1) + "  is Negative");
    
 }
 else if (no1==0){
     document.write(String(no1) + "  is Zero");
    
 }


 ////Task 4:

 document.write(" <h3> <b> Task 4  </h3> </b>" );
 Letter=prompt("Enter a one Letter ");
     
    if (Letter=='a' | Letter=="e"  | Letter=="i"  | Letter=="o" | Letter=="u")
    {
        document.write(String(Letter) + " is Vowel");
    }
    else 
    {
        document.write(String(Letter) + "  is not Vowel");
       
    }

    ////Task 5:

    document.write(" <h3> <b> Task 5  </h3> </b>" );
    CorrectPassWord="no1izmine";
    Pass=prompt("Enter Your Password ");
     
    if (Pass==CorrectPassWord)
    {
        document.write(" “Correct! The password you entered matches the original password”");
    }
    else 
    {
        document.write("Incorrect! The password you entered  doesnot matches the original password");
       
    }


    /////Task 6:

    document.write(" <h3> <b> Task 6  </h3> </b>" );
    var hrs=23;  
    if (hrs<18)
    {
        document.write(" “Good Day”");
    }
    else 
    {
        document.write("Good Evening");
       
    }


    /////Task 7:

    var time = prompt("Enter Time")
    if(time >= 0000&&time<1200){
        alert("Good Morning")
    }
    else if(time >= 1200&&time<1600){
        alert("Good Afternoon")
    }
    if(time >= 1600&&time<2100){
        alert("Good Evening")
    }
    if(time >= 2100&&time<2359){
        alert("Good Night")
    }