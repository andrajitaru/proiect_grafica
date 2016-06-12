
function validateForm() {
	var recCode=document.forms["JoinUs"]["RecCode"];
    var x = recCode.value;
    if (x == null || x == "") {
        recCode.style.backgroundColor="red";
        return false;
    }
}

function colorNumberRed() {
	var elements = document.getElementsByClassName("co2value")
	for (var i=0; i<elements.length; i++) {
		elements[i].style.color="red"
	}
}   

function colorNumberBlack() {
	var elements = document.getElementsByClassName("co2value")
	for (var i=0; i<elements.length; i++) {
		elements[i].style.color="black"
	}
}      

function addRow() {
	var textNode=document.createTextNode("OECD members");
	var newRegion=document.createElement("TD");
	newRegion.appendChild(textNode);
	
	var numberNode=document.createTextNode("9.9");
	var newValue=document.createElement("TD");
	newValue.appendChild(numberNode);
	
	var newRow=document.createElement("TR");
	newRow.appendChild(newRegion);
	newRow.appendChild(newValue);
	
	var tableBody = document.getElementById("tbody");
	tableBody.appendChild(newRow);
	
}
     