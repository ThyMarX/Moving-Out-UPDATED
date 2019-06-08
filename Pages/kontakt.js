// JavaScript Document

// vi bruger Nikolai Perlt's database til at sende email til vores mail fra mailen "jensenssejebutik"
document.getElementById("submit").addEventListener("click", function(){
	const to = "movingoutdk@gmail.com";
	let from = document.getElementById("fname").value;
	let mail = document.getElementById("email").value;
	let subject = document.getElementById("subject").value;
	let text = document.getElementById("message").value;
	fetch("https://perlt.net/sendMail/?to="+ to +"&subject="+ subject +"&text=" + "Mail from: " + from + " " + mail +  "<br>" + text)
	alert("Din besked er sendt");
})/* max 2000 tegn */
