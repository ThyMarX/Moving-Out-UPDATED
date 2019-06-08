// JavaScript Document

//Checkliste variablerne der indeholder html
let checkliste1 = `<h3>Alt</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Håndklæder </li> <li>  &#9634; Spejl </li> <li>  &#9634; Vægt </li> <li>  &#9634; Badeforhæng </li> <li>  &#9634; Toiletbørste </li> <li>  &#9634; Tandbørste-krus </li>

						<li>  &#9634; Bordlamper </li> <li>  &#9634; Seng </li> <li>  &#9634; Sengebord </li> <li>  &#9634; Lyspærer </li> <li>  &#9634; Planter </li> <li>  &#9634; Gardiner </li> <li>  &#9634; Puder </li> <li>  &#9634; Lagner </li> <li>  &#9634; Dyne </li> <li>  &#9634; Sengetøj </li> <li>  &#9634; Madras </li> <li>  &#9634; Garderobeskab </li> <li>  &#9634; Bøjler </li> <li>  &#9634; Knagerække til dør  </li>

						<li>  &#9634; Klude </li> <li>  &#9634; Viskestykker </li> <li>  &#9634; Opvaskesvamp </li> <li>  &#9634; Opvaskebørste </li> <li>  &#9634; Span </li> <li>  &#9634; Kost og fejebakke </li> <li>  &#9634; Gulvmoppe </li> <li>  &#9634; Støvsuger </li> <li>  &#9634; Støvsugerposer </li> <li>  &#9634; Vaskemaskine </li> 
						
		
						<li class="mobile-only">  &#9634; Opvaskemaskine </li> <li class="mobile-only">  &#9634; Vaskemiddel </li> <li class="mobile-only">  &#9634; Groft filtersalt </li> <li class="mobile-only">  &#9634; Spændingsmiddel </li> <li class="mobile-only">  &#9634; Tørrestativ </li> <li class="mobile-only">  &#9634; Tøjklemmer </li> <li class="mobile-only">  &#9634; Vasketøjskurv </li>

						<li class="mobile-only">  &#9634; Gryder og pander </li> <li class="mobile-only">  &#9634; Køkkenredskaber </li> <li class="mobile-only">  &#9634; Kopper </li> <li class="mobile-only">  &#9634; Skåle </li> <li class="mobile-only">  &#9634; Bestik </li> <li class="mobile-only">  &#9634; Tallerkener </li> <li class="mobile-only">  &#9634; Glas </li> <li class="mobile-only">  &#9634; Vinglas </li> <li class="mobile-only">  &#9634; Dåseåbner </li> <li class="mobile-only">  &#9634; Mikrobølgeovn </li>

						<li class="mobile-only">  &#9634; Gulvlamper </li> <li class="mobile-only">  &#9634; Sofa </li> <li class="mobile-only">  &#9634; Stole </li> <li class="mobile-only">  &#9634; Spisebord </li> <li class="mobile-only">  &#9634; Lyspærer </li> <li class="mobile-only">  &#9634; Planter </li> <li class="mobile-only">  &#9634; Billeder </li> <li class="mobile-only">  &#9634; Skrivebord </li> <li class="mobile-only">  &#9634; Skrivebordsstol </li> <li class="mobile-only">  &#9634; Arbejdslampe </li> <li class="mobile-only">  &#9634; Bogreol </li> <li class="mobile-only">  &#9634; Hylder </li>
					</ul>

					<ul class="checkliste pc-only">
						<li>  &#9634; Opvaskemaskine </li> <li>  &#9634; Vaskemiddel </li> <li>  &#9634; Groft filtersalt </li> <li>  &#9634; Spændingsmiddel </li> <li>  &#9634; Tørrestativ </li> <li>  &#9634; Tøjklemmer </li> <li>  &#9634; Vasketøjskurv </li>

						<li>  &#9634; Gryder og pander </li> <li>  &#9634; Køkkenredskaber </li> <li>  &#9634; Kopper </li> <li>  &#9634; Skåle </li> <li>  &#9634; Bestik </li> <li>  &#9634; Tallerkener </li> <li>  &#9634; Glas </li> <li>  &#9634; Vinglas </li> <li>  &#9634; Dåseåbner </li> <li>  &#9634; Mikrobølgeovn </li>

						<li>  &#9634; Gulvlamper </li> <li>  &#9634; Sofa </li> <li>  &#9634; Stole </li> <li>  &#9634; Spisebord </li> <li>  &#9634; Lyspærer </li> <li>  &#9634; Planter </li> <li>  &#9634; Billeder </li> <li>  &#9634; Skrivebord </li> <li>  &#9634; Skrivebordsstol </li> <li>  &#9634; Arbejdslampe </li> <li>  &#9634; Bogreol </li> <li>  &#9634; Hylder </li>
					</ul>
				</div>
			</div>`;
let checkliste2 = `<h3>Badeværelse</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Håndklæder </li> <li>  &#9634; Spejl </li> <li>  &#9634; Vægt </li> 
						
						<li class="mobile-only">  &#9634; Badeforhæng </li> <li class="mobile-only">  &#9634; Toiletbørste </li> <li class="mobile-only">  &#9634; Tandbørste-krus </li> 
					</ul>

					<ul class="checkliste pc-only">
						<li>  &#9634; Badeforhæng </li> <li>  &#9634; Toiletbørste </li> <li>  &#9634; Tandbørste-krus </li> 
					</ul>
				</div>
			</div>`;
let checkliste3 = `<h3>Køkken</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Gryder og pander </li> <li>  &#9634; Køkkenredskaber </li> <li>  &#9634; Kopper </li> <li>  &#9634; Skåle </li> <li>  &#9634; Bestik </li>

						<li class="mobile-only">  &#9634; Tallerkener </li> <li class="mobile-only">  &#9634; Glas </li> <li class="mobile-only">  &#9634; Vinglas </li> <li class="mobile-only">  &#9634; Dåseåbner </li> <li class="mobile-only">  &#9634; Mikrobølgeovn </li>
					</ul>

					<ul class="checkliste pc-only"> 
						<li>  &#9634; Tallerkener </li> <li>  &#9634; Glas </li> <li>  &#9634; Vinglas </li> <li>  &#9634; Dåseåbner </li> <li>  &#9634; Mikrobølgeovn </li>
					</ul>
				</div>
			</div>`;
let checkliste4 = `<h3>Soveværelse</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Lagner </li> <li>  &#9634; Dyne </li> <li>  &#9634; Sengetøj </li> <li>  &#9634; Madras </li> <li>  &#9634; Garderobeskab </li> <li>  &#9634; Bøjler </li> <li>  &#9634; Knagerække til dør  </li>

						<li class="mobile-only">  &#9634; Bordlamper </li> <li class="mobile-only">  &#9634; Seng </li> <li class="mobile-only">  &#9634; Sengebord </li> <li class="mobile-only">  &#9634; Lyspærer </li> <li class="mobile-only">  &#9634; Planter </li> <li class="mobile-only">  &#9634; Gardiner </li> <li class="mobile-only">  &#9634; Puder </li>
					</ul>

					<ul class="checkliste pc-only">
						<li>  &#9634; Bordlamper </li> <li>  &#9634; Seng </li> <li>  &#9634; Sengebord </li> <li>  &#9634; Lyspærer </li> <li>  &#9634; Planter </li> <li>  &#9634; Gardiner </li> <li>  &#9634; Puder </li>
					</ul>
				</div>
			</div>`;
let checkliste5 = `<h3>Stue</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Gulvlamper </li> <li>  &#9634; Sofa </li> <li>  &#9634; Stole </li> <li>  &#9634; Spisebord </li> <li>  &#9634; Lyspærer </li> <li>  &#9634; Planter </li> 

						<li class="mobile-only">  &#9634; Billeder </li> <li class="mobile-only">  &#9634; Skrivebord </li> <li class="mobile-only">  &#9634; Skrivebordsstol </li> <li class="mobile-only">  &#9634; Arbejdslampe </li> <li class="mobile-only">  &#9634; Bogreol </li> <li class="mobile-only">  &#9634; Hylder </li>
					</ul>

					<ul class="checkliste pc-only">
						<li>  &#9634; Billeder </li> <li>  &#9634; Skrivebord </li> <li>  &#9634; Skrivebordsstol </li> <li>  &#9634; Arbejdslampe </li> <li>  &#9634; Bogreol </li> <li>  &#9634; Hylder </li>
					</ul>
				</div>
			</div>`;
let checkliste6 = `<h3>Rengøring</h3>
			<span id="checklisteClose" onClick="closeCheckliste()">&times;</span>
			<div class="center-content">
				<div class="checkliste-container">
					<ul class="checkliste">
						<li>  &#9634; Kost og fejebakke </li> <li>  &#9634; Gulvmoppe </li> <li>  &#9634; Støvsuger </li> <li>  &#9634; Støvsugerposer </li> <li>  &#9634; Vaskemaskine </li> 

						<li class="mobile-only">  &#9634; Klude </li> <li class="mobile-only">  &#9634; Viskestykker </li> <li class="mobile-only">  &#9634; Opvaskesvamp </li> <li class="mobile-only">  &#9634; Opvaskebørste </li> <li class="mobile-only">  &#9634; Span </li> 
					</ul>

					<ul class="checkliste pc-only">
						<li>  &#9634; Klude </li> <li>  &#9634; Viskestykker </li> <li>  &#9634; Opvaskesvamp </li> <li>  &#9634; Opvaskebørste </li> <li>  &#9634; Span </li> 
					</ul>
				</div>
			</div>`;

// ---checkliste javascript----

// vi kalder på htmlen og laver variabler ud af dem
let checklisteKnap1  = document.getElementById('checkliste1');
let checklisteKnap2  = document.getElementById('checkliste2');
let checklisteKnap3  = document.getElementById('checkliste3');
let checklisteKnap4  = document.getElementById('checkliste4');
let checklisteKnap4b = document.getElementById('checkliste4b');
let checklisteKnap5  = document.getElementById('checkliste5');
let checklisteKnap5b = document.getElementById('checkliste5b');
let checklisteKnap6  = document.getElementById('checkliste6');
let checklisteKnap6b = document.getElementById('checkliste6b');
let checkListe = document.getElementById('checkliste');

// vi tilføjer en unik function til hver af "Læg i kurv" knapperne
checklisteKnap1.addEventListener ("click", checkliste1Action);
checklisteKnap2.addEventListener ("click", checkliste2Action);
checklisteKnap3.addEventListener ("click", checkliste3Action);
checklisteKnap4.addEventListener ("click", checkliste4Action);
checklisteKnap4b.addEventListener("click", checkliste4Action);
checklisteKnap5.addEventListener ("click", checkliste5Action);
checklisteKnap5b.addEventListener("click", checkliste5Action);
checklisteKnap6.addEventListener ("click", checkliste6Action);
checklisteKnap6b.addEventListener("click", checkliste6Action);

function closeCheckliste(){
	checkListe.style.display = "none";
	document.getElementById("checkliste").innerHTML = "";
}
function checkliste1Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste1;
}
function checkliste2Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste2;
}
function checkliste3Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste3;
}
function checkliste4Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste4;
}
function checkliste5Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste5;
}
function checkliste6Action(){
	checkListe.style.display = "block";
	document.getElementById("checkliste").innerHTML = checkliste6;
}


// ---10 råd js---
//laver variablen som bestemmer hvilken slide vi er på
let slideIndex = 1;
//kalder functionen til at vise det første slide når siden bliver loadet
showDivs(slideIndex);

//
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
//hvis n bliver højere end antal slides så sætter den sig på 1's plads
  if (n > x.length) {
	  slideIndex = 1
  }
	//hvis vi trykker på pil tilbage
  if (n < 1) {
	  slideIndex = x.length
  }
	//gemmer de andre slides
  for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";  
  }
	//viser det rigtige slide
  x[slideIndex-1].style.display = "block";  
}


// få modalet
let tips = document.getElementById('tips');

// få knappen der åbnet modalet
let tipsBtn = document.getElementById("tipsBtn");

// få <span> elemented der lukker modalet ned
let tipsSpan1  = document.getElementsByClassName("close")[0];
let tipsSpan2  = document.getElementsByClassName("close")[1];
let tipsSpan3  = document.getElementsByClassName("close")[2];
let tipsSpan4  = document.getElementsByClassName("close")[3];
let tipsSpan5  = document.getElementsByClassName("close")[4];
let tipsSpan6  = document.getElementsByClassName("close")[5];
let tipsSpan7  = document.getElementsByClassName("close")[6];
let tipsSpan8  = document.getElementsByClassName("close")[7];
let tipsSpan9  = document.getElementsByClassName("close")[8];
let tipsSpan10 = document.getElementsByClassName("close")[9];

// når brugeren klikker på knappen åbner den modalet
tipsBtn.onclick = function() {		tips.style.display = "block";	navbar.style.display = "none";  }

// når brugeren klikker på <span> (x), lukker det modalet
tipsSpan1.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan2.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan3.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan4.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan5.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan6.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan7.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan8.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan9.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}
tipsSpan10.onclick = function() {	tips.style.display = "none";	navbar.style.display = "block";	}

// når brugeren klikker et hvert sted udenfor modalet lukker den det
window.onclick = function(event) {
  if (event.target == tips) {		tips.style.display = "none";	navbar.style.display = "block"; } 
}