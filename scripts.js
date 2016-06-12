
function validateForm() {
	var recCode=document.forms["JoinUs"]["RecCode"];
    var x = recCode.value;
    if (x == null || x == "") {
        recCode.style.backgroundColor="red";
        return false;
    }
}

function colorNumberYellow() {
	var elements = document.getElementsByClassName("co2value")
	for (var i=0; i<elements.length; i++) {
		elements[i].style.color="yellow"
	}
}   

function colorNumberBlack() {
	var elements = document.getElementsByClassName("co2value")
	for (var i=0; i<elements.length; i++) {
		elements[i].style.color="black"
	}
}      