// Q1
function form(){
    var f = document.getElementById("form1");
    f.className = "hidden";
    var tableDiv = document.getElementById("tableDiv");
    tableDiv.className="";
    var thanks = document.getElementById("thanks");
    thanks.innerHTML = "Thank you for submitting your form... <br>Following information has been recorded"
    var name = document.getElementById("name");
    var a = name.value;
    var nameNew = document.getElementById("nameNew");
     nameNew.innerHTML = a;
    console.log(nameNew.value);

    var mobile = document.getElementById("mobile");
    var mobileNew = document.getElementById("mobileNew");
    var m = mobile.value;
    mobileNew.innerHTML = m;
    


    var qualification = document.getElementById("qualification");
    var q = qualification.value;
    var qualificationNew = document.getElementById("qualificationNew");
    qualificationNew.innerHTML = q;

    var address = document.getElementById("address");
    var ad = address.value;
    var addressNew = document.getElementById("addressNew");
    addressNew.innerHTML = ad;

    var emailNew = document.getElementById("emailNew");
    var email = document.getElementById("email");
    
     emailNew.innerHTML = email.value;
}

function expandLoris() {
    var expandedParagraph = "and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system (OS), and as of 2017, there were 2.2 million apps available for it through the Apple App Store, according to Statista.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
    }

// Q2
function read(paraId,readId){
    var para = document.getElementById(paraId);
    var an = para.getElementsByTagName("a")
    an[0].className = "hidden";
    var para1 = document.getElementById(readId);
    para1.className="";
    
}

// Q3
var saveId = "";
function deleteRow(rowId){
    var delRow = document.getElementById(rowId);
    delRow.innerHTML =""
}
function edit(rowId){
    var editField = document.getElementById("editField");
    editField.className = "";
    var r = document.getElementById(rowId);
    var val = r.getElementsByTagName('td');
    console.log(val[1].innerHTML);
    var a = val[1].innerHTML;
    var b = val[2].innerHTML;
    var inpValue = editField.getElementsByTagName('input');
    inpValue[0].value = a;
    inpValue[1].value = b;
    saveId = rowId;
    console.log(saveId)
}
console.log(saveId)
function save(saveId){
    var editField = document.getElementById("editField");
    var inpValue = editField.getElementsByTagName('input');
    a = inpValue[0].value;
    b = inpValue[1].value; 
    console.log(saveId);
    var r = document.getElementById(saveId);
    var val = r.getElementsByTagName('td');
    val[1].innerHTML =a;
    val[2].innerHTML =b;

    
    
     editField.className = "hidden";
}

function cancel() {
    var editField = document.getElementById("editField");
    editField.className = "hidden";
}