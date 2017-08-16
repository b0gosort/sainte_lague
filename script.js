var numParties = 0;
var numSeats = 0;
var numModify = 0;

function showFormB() {
	document.getElementById("forma").style.display = "none";

	var formB = document.getElementById("formb");
	numParties = document.getElementById("partynum").value;
	numSeats = document.getElementById("seatnum").value;
	numModify = document.getElementById("modifynum").value;

	formContent = "<ul><li>Total Seats: " + numSeats + "</li><li>Modifier: " + numModify + "</li></ul>";
	for (var i = 0; i < numParties; i ++) {
		x = i + 1
		formContent += "<span class='formfield'><p>Party/Group " + x + " Votes</p><input type='number' id='votes_party" + x + "'></span>";
	}

	formB.innerHTML = formContent;
	formB.style.display = "block";
}