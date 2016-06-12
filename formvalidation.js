
function validateForm() {
	debugger;
	var recCode=document.forms["JoinUs"]["RecCode"];
    var x = recCode.value;
    if (x == null || x == "") {
        recCode.style.backgroundColor="red";
        return false;
    }
}
