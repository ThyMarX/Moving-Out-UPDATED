// Når brugeren scroler på siden udfører man myFunction 
window.onscroll = function() {myFunction()};

// lav Navbaren om til en variabel
let navbar = document.getElementById("navbar");

// Få offset positionen (der hvor den er på skærmen) af navbar'en
let sticky = navbar.offsetTop;


// for at fixe en bug hvor at navbaren "hopper" når den bliver sticky laver vi en fake navbar
let fakeNavbar = document.getElementById("fake-navbar");

// Tilføjer "sticky" classen til navbaren når vi scroller ned til den på siden og fjerner den igen når vi scroller op
function myFunction() {
 	if (window.pageYOffset +1 >= sticky) {
		let navbarHeight = document.getElementById("navbar").clientHeight;
		fakeNavbar.style.height = navbarHeight + "px";
 		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
		fakeNavbar.style.height = "0px";
	}
}
	
// responsive burger menu

let navbarID = document.getElementById("navbar");
navbarID.onclick = function() {
	if (navbarID.className === "navbar"){
		navbar.classList.add("responsive");
	} else	if (navbarID.className === "navbar sticky"){
		navbar.classList.add("responsive");
	} else	if (navbarID.className === "navbar responsive") {
		navbar.classList.remove("responsive");
	} else	if (navbarID.className === "navbar sticky responsive") {
		navbar.classList.remove("responsive");
		let navbarHeight = document.getElementById("navbar").clientHeight;
		fakeNavbar.style.height = navbarHeight + "px";
	} else	if (navbarID.className === "navbar responsive sticky") {
		navbar.classList.remove("responsive");
		let navbarHeight = document.getElementById("navbar").clientHeight;
		fakeNavbar.style.height = navbarHeight + "px";
	}
}