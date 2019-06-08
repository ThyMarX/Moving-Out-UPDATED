// JavaScript Document


// ---Varer modals
// få modalerne
let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');
let modal5 = document.getElementById('myModal5');
let modal6 = document.getElementById('myModal6');

// få knapperne der åbner modalerne
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");
let btn4 = document.getElementById("myBtn4");
let btn5 = document.getElementById("myBtn5");
let btn6 = document.getElementById("myBtn6");

// få <span> elementerne som lukker modalerne
let span1 = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];
let span3 = document.getElementsByClassName("close")[2];
let span4 = document.getElementsByClassName("close")[3];
let span5 = document.getElementsByClassName("close")[4];
let span6 = document.getElementsByClassName("close")[5];

// når brugeren klikker på knapperne, åbner det modalet 
btn1.onclick = function() {		modal1.style.display = "block";	navbar.style.display = "none";	}
btn2.onclick = function() {		modal2.style.display = "block";	navbar.style.display = "none";	}
btn3.onclick = function() {		modal3.style.display = "block";	navbar.style.display = "none";	}
btn4.onclick = function() {		modal4.style.display = "block";	navbar.style.display = "none";	}
btn5.onclick = function() {		modal5.style.display = "block";	navbar.style.display = "none";	}
btn6.onclick = function() {		modal6.style.display = "block";	navbar.style.display = "none";	}

// når brugeren klikker på <span> (x), lukker det modalerne
span1.onclick = function() {	modal1.style.display = "none";	navbar.style.display = "block";	}
span2.onclick = function() {	modal2.style.display = "none";	navbar.style.display = "block";	}
span3.onclick = function() {	modal3.style.display = "none";	navbar.style.display = "block";	}
span4.onclick = function() {	modal4.style.display = "none";	navbar.style.display = "block";	}
span5.onclick = function() {	modal5.style.display = "none";	navbar.style.display = "block";	}
span6.onclick = function() {	modal6.style.display = "none";	navbar.style.display = "block";	}

// Når brugeren klikker et hvert sted udenfor modalet, lukker modalet
window.onclick = function(event) {
  if (event.target == modal1) {	modal1.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal2) {	modal2.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal3) {	modal3.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal4) {	modal4.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal5) {	modal5.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == modal6) {	modal6.style.display = "none";	navbar.style.display = "block";	} 
  if (event.target == kurvModal) {
	  kurvModal.style.display = "none";
	  document.getElementById("kurv-liste").innerHTML = '<div class="kurv-liste1" id="vare"> <h4 class="left-text">Vare</h4> <br class="line-height"> </div>   <div class="kurv-liste2" id="pris"> <h4 class="left-text">Pris</h4> <br class="line-height"> </div>  <div class="kurv-liste2" id="stk"> <h4 class="left-text">Stk</h4> <br class="line-height"> </div>';
	  document.getElementById("total-pris").innerHTML = "Total price: ";
	  navbar.style.display = "block";	
  }
  if (event.target == betalModal) {
	  betalModal.style.display = "none";
  }
}




// -----Kurv feature----
// ---Kurv Modal---
// Få modalens id 
let kurvModal = document.getElementById('kurvModal');

// Få id på knappens åbner modalet
let kurv = document.getElementById("kurv");

// Få <span> elementet (krydset) som lukker modalet
let kurvClose = document.getElementsByClassName("close")[6];

// Funktionen som når man klikker på kurv knappen åbner man modalet 
kurv.onclick = function() {
 	kurvModal.style.display = "block"; 
	navbar.style.display = "none";
}

// Funktionen som gør at når man klikker på krydset så lukker modalet
kurvClose.onclick = function() {
	kurvModal.style.display = "none";
	document.getElementById("kurv-liste").innerHTML = '<div class="kurv-liste1" id="vare"> <h4 class="left-text">Vare</h4> <br class="line-height"> </div>   <div class="kurv-liste2" id="pris"> <h4 class="left-text">Pris</h4> <br class="line-height"> </div>  <div class="kurv-liste2" id="stk"> <h4 class="left-text">Stk</h4> <br class="line-height"> </div>';
	document.getElementById("total-pris").innerHTML = "Total price: ";
	navbar.style.display = "block";
}


// ---Kurv---
// arrayet som fortæller vores kurv hvor mange vare der er blevet tilføjet
let products = [0, 0, 0, 0, 0, 0];

// vi kalder på htmlen og laver variabler ud af dem
let item1  = document.getElementById('item1');
let item1b = document.getElementById('item1b');
let item2  = document.getElementById('item2');
let item2b = document.getElementById('item2b');
let item3  = document.getElementById('item3');
let item3b = document.getElementById('item3b');
let item4  = document.getElementById('item4');
let item4b = document.getElementById('item4b');
let item5  = document.getElementById('item5');
let item5b = document.getElementById('item5b');
let item6  = document.getElementById('item6');
let item6b = document.getElementById('item6b');

// vi tilføjer en unik function til hver af "Læg i kurv" knapperne
item1.addEventListener ("click", item1Action);
item1b.addEventListener("click", item1bAction);
item2.addEventListener ("click", item2Action);
item2b.addEventListener("click", item2bAction);
item3.addEventListener ("click", item3Action);
item3b.addEventListener("click", item3bAction);
item4.addEventListener ("click", item4Action);
item4b.addEventListener("click", item4bAction);
item5.addEventListener ("click", item5Action);
item5b.addEventListener("click", item5bAction);
item6.addEventListener ("click", item6Action);
item6b.addEventListener("click", item6bAction);


// Den bestemte function for hver af knapperne
function item1Action(){ 
	count(0); //vi kalder på functionen count og tilføjer et stk af varen til kurven
	item1.style.animation = "spin 0.5s linear"; //vi spiller knappens animation
	addUpBasket();
	setTimeout(function(){ removeClass(item1)}, 500); //vi kalder på functionen removeClass først efter animationen er færdig
}
function item1bAction(){ 
	count(0); //vi kalder på functionen count og tilføjer et stk af varen til kurven
	item1b.style.animation = "spin 0.5s linear"; //vi spiller knappens animation
	addUpBasket();
	setTimeout(function(){ removeClass(item1b)}, 500); //vi kalder på functionen removeClass først efter animationen er færdig
}
function item2Action(){ 
	count(1);
	item2.style.animation = "spin 0.5s linear";
	addUpBasket();
	setTimeout(function(){ removeClass(item2)}, 500);
}
function item2bAction(){ 
	count(1);
	item2b.style.animation = "spin 0.5s linear";
	addUpBasket();
	setTimeout(function(){ removeClass(item2b)}, 500);
}
function item3Action(){ 
	count(2);
	item3.style.animation = "spin 0.5s linear";
	addUpBasket();
	setTimeout(function(){ removeClass(item3)}, 500);
}
function item3bAction(){ 
	count(2);
	item3b.style.animation = "spin 0.5s linear";
	addUpBasket();
	setTimeout(function(){ removeClass(item3b)}, 500);
}
function item4Action(){ 
	count(3);
	item4.style.animation = "spin 0.5s linear";
	addUpBasket();
	setTimeout(function(){ removeClass(item4)}, 500);
}
function item4bAction(){ 
	count(3);
	item4b.style.animation = "spin 0.5s linear";
	addUpBasket();
	setTimeout(function(){ removeClass(item4b)}, 500);
}
function item5Action(){ 
	count(4);
	item5.style.animation = "spin 0.5s linear";
	addUpBasket();
	setTimeout(function(){ removeClass(item5)}, 500);
}
function item5bAction(){ 
	count(4);
	item5b.style.animation = "spin 0.5s linear";
	addUpBasket();
	setTimeout(function(){ removeClass(item5b)}, 500);
}
function item6Action(){ 
	if(products[5] > 0){
		alert('Du kan kun bestille 1 abonnoment af "Rengørings Abonnement".');
	} else {
		count(5);
		item6.style.animation = "spin 0.5s linear";
		addUpBasket();
		setTimeout(function(){ removeClass(item6)}, 500);	
	}
}
function item6bAction(){ 
	if(products[5] > 0){
		alert('Du kan kun bestille 1 abonnoment af "Rengørings Abonnement".');
	} else {
		count(5);
		item6b.style.animation = "spin 0.5s linear";
		addUpBasket();
		setTimeout(function(){ removeClass(item6b)}, 500);	
	}
}

// functionen som tilføjer varen til kurven
function count(product) {
	products[product] += 1; //tilføjelsen sker her
	kurv.style.animation = "enlarge 0.5s linear"; //afspil kruvens animation
}

// tæller variabler
let counter = 0;
let countBasket = document.getElementById("counter");

// functionen som tilføjer et tal til tælleren
function addUpBasket() {
	countBasket.style.display = "block";
	counter = 1 + counter;
	countBasket.innerHTML = counter ; 
	countBasket.style.animation = "up 0.5s"
}

// functionen som fjerne animation classes fra knapperne, hvilket gør at animationen kan spilles igen når vi klikker igen
function removeClass(a){
	a.style.animation = "";
	kurv.style.animation = "";
	countBasket.style.animation = "";
}



// når vi trykker på kurv knappen kalder vi på functionen visKurv
kurv.addEventListener("click", visKurv);

// functionen gør at varene bliver vist i kurv modalet
function visKurv(){
	let totalPris = 0; //vi laver en samlet pris
	if(products[0] > 0){ //en if statement som tjekker om der er blevet trykket på "Læg i kurv" knappen for vare1 og hvis der er bliver varen tilføjet til kurven
		document.getElementById("vare").innerHTML += "Pakke 1 <br class='line-height'>"; //her skal der ændres på navnet
		document.getElementById("pris").innerHTML += "165 dkk <br class='line-height'>"; //her skal der ændres på prisen
		document.getElementById("stk").innerHTML += products[0] + "<br class='line-height'>";
		totalPris += 165 * products[0]; //her skal der ændres på prisen igen
	}
	if(products[1] > 0){
		document.getElementById("vare").innerHTML += "Pakke 2 <br class='line-height'>"; 
		document.getElementById("pris").innerHTML += "292dkk <br class='line-height'>"; 
		document.getElementById("stk").innerHTML += products[1] + "<br class='line-height'>";
		totalPris += 292 * products[1]; 
	}
	if(products[2] > 0){
		document.getElementById("vare").innerHTML += "Pakke 3 <br class='line-height'>";
		document.getElementById("pris").innerHTML += "1070 dkk <br class='line-height'>";
		document.getElementById("stk").innerHTML += products[2] + "<br class='line-height'>";
		totalPris += 1070 * products[2];
	}
	if(products[3] > 0){
		document.getElementById("vare").innerHTML += "Pakke 4 <br class='line-height'>";
		document.getElementById("pris").innerHTML += "239 dkk <br class='line-height'>";
		document.getElementById("stk").innerHTML += products[3] + "<br class='line-height'>";
		totalPris += 239 * products[3];
	}
	if(products[4] > 0){
		document.getElementById("vare").innerHTML += "Pakke 5 <br class='line-height'>";
		document.getElementById("pris").innerHTML += "1502 dkk <br class='line-height'>";
		document.getElementById("stk").innerHTML += products[4] + "<br class='line-height'>";
		totalPris += 1502 * products[4];
	}
	if(products[5] > 0){
		document.getElementById("vare").innerHTML += "Abonnement <br class='line-height'>";
		document.getElementById("pris").innerHTML += "222 dkk <br class='line-height'>";
		document.getElementById("stk").innerHTML += products[5] + "<br class='line-height'>";
		totalPris += 222 * products[5];
	}

	// hvis kurven er tom
	if(products[0] == 0 && products[1] == 0 && products[2] == 0 && products[3] == 0 && products[4] == 0 && products[5] == 0 ){
		document.getElementById("kurv-liste").innerHTML = "Kurven er tom";
	}

	// vis den totalle pris
	document.getElementById("total-pris").innerHTML += totalPris + " dkk";
}

//tom kurv knap
let tomKurvKnap = document.getElementById('tom-kurv');
tomKurvKnap.addEventListener("click", tomKurv);
function tomKurv(){
	products = [0, 0, 0, 0, 0, 0];
	document.getElementById("kurv-liste").innerHTML = "Kurven er tom";
	document.getElementById("total-pris").innerHTML = "TOTAL PRICE: 0 DKK";
	countBasket.style.display = "none";
	counter = 0;
}

// ---Betaling Modal---
// få modalet
let betalModal = document.getElementById('betalModal');

// få knappen der åbner modalet
let betal = document.getElementById("betalling");

// få <span> element som lukker modalet
let betalClose = document.getElementsByClassName("close")[7];

// når brugeren klikker på knappen åbner det modalet
betal.onclick = function() {
	// hvis kurven er tom giver det ingen mening at kunne åbne betal modalet
	if(products[0] == 0 && products[1] == 0 && products[2] == 0 && products[3] == 0 && products[4] == 0 && products[5] == 0 ){
		alert("Kurven er tom");
	} else {
		betalModal.style.display = "block";
	}
}

// når brugeren klikker på <span> (x), lukker det modalet
betalClose.onclick = function() {
	betalModal.style.display = "none";
}

// betalingsknap variabler
let betalKnap = document.getElementById("betal");
betalKnap.addEventListener("click", betalt);

// betalingsknap funtion, den laver en alert og nulstiller alt i kurv m.m.
function betalt(){
	alert("Din betaling gik igennem");
	kurvModal.style.display = "none";
	document.getElementById("kurv-liste").innerHTML = '<div class="kurv-liste1" id="vare"> <h4 class="left-text">Vare</h4> <br class="line-height"> </div>   <div class="kurv-liste2" id="pris"> <h4 class="left-text">Pris</h4> <br class="line-height"> </div>  <div class="kurv-liste2" id="stk"> <h4 class="left-text">Stk</h4> <br class="line-height"> </div>';
	document.getElementById("total-pris").innerHTML = "Total price: ";
	betalModal.style.display = "none";
	products = [0, 0, 0, 0, 0, 0];
	navbar.style.display = "block";
	countBasket.style.display = "none";
	counter = 0;
}




	
	
	
	
	