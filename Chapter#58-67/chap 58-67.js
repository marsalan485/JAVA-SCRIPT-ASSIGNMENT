//q1
var mainContent = document.getElementById("main-content");

// //q2
for(var i = 0;i<=mainContent.childNodes.length-1;i++){
        document.write("<br> "+ mainContent.childNodes[i].innerHTML);
    }
    
    


//q3
    var render = mainContent.getElementsByClassName("render");
    console.log(render);
    for(var i = 0;i<=render.length-1;i++){
        var a = render[i].innerText;
        document.write("<br> "+ a);
    }

    //q4

    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var email = document.getElementById("email");
    firstName.value = "Abdullah";
    lastName.value = "Muhammad Ibrahim";
    email.value = "appsid4321@gmail.com";





//q5 
var ntype = document.getElementById("form-content");
document.write("<br> Node type of form-content :"+ ntype.nodeType);

//q6
var lastNametype = document.getElementById("lastName");
var lastNameChild = lastNametype.childNodes[0];
document.write("<br> Node type of form-content :"+ lastName.nodeType+" and node type of its child id is "+lastNameChild.nodeType);

//q7
lastNameChild.nodeValue = "Arbab";
document.write("<br> node value of id:lastName after change is " + lastNameChild.nodeValue);

//q8
var mainContent = document.getElementById("main-content");
document.write("<br> First child value of main-content Id: "+ mainContent.firstChild.innerHTML);
document.write("<br> Last child value of main-content Id: "+mainContent.lastChild.innerHTML);


//q9

document.write("<br> Next sibling value of lastName Id : "+ lastNametype.nextSibling.innerHTML);
document.write("<br> Previous sibling value of lastName Id : "+ lastNametype.previousSibling.innerHTML);

//q10
 
document.write("<br> Parent node of email id: "+email.parentNode.innerHTML);
document.write("<br> Node type of element having id='email' is : "+email.nodeType)
