
// https://codeactually.com/interactivequiz.html det er her vi har fået den fra, måske den kan hjælpe med at forklare

document.getElementById("form1").onsubmit=function() {
	// Med de nedenstående 10 linjer finder vi det checkede felt og placere dens værdi i en variabel

	// parseInt = function der laver en variable om til tal
	// querySelector =  vi finder det første element der matcher det der står
	q1 = parseInt(document.querySelector('input[name = "question1"]:checked').value);
	q2 = parseInt(document.querySelector('input[name = "question2"]:checked').value);
	q3 = parseInt(document.querySelector('input[name = "question3"]:checked').value);
	q4 = parseInt(document.querySelector('input[name = "question4"]:checked').value);
	q5 = parseInt(document.querySelector('input[name = "question5"]:checked').value);
	q6 = parseInt(document.querySelector('input[name = "question6"]:checked').value);
	q7 = parseInt(document.querySelector('input[name = "question7"]:checked').value);
	q8 = parseInt(document.querySelector('input[name = "question8"]:checked').value);
	q9 = parseInt(document.querySelector('input[name = "question9"]:checked').value);
	q10 = parseInt(document.querySelector('input[name = "question10"]:checked').value);

	//lægger værdierne sammen
	result = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;

	//får værdien til at blive set på siden
	document.getElementById("grade").innerHTML = "<b>" + result + "</b>";

	//if statements som fortæller ekstra til quiz tageren
	if (result == 0) {result2 = "Hvordan fanden fik du 0? Spg 10 har kun rigtige svar???"};
	if (result == 10) {result2 = "Uha, du er vidst ikke klar, kig vores hjemmeside igennem og så prøv igen."};
	if (result == 20) {result2 = "Uha, du er vidst ikke klar, kig vores hjemmeside igennem og så prøv igen."};
	if (result == 30) {result2 = "Du har lidt forstand, men du kan sagtens lære mere"};
	if (result == 40) {result2 = "Du har lidt forstand, men du kan sagtens lære mere"};
	if (result == 50) {result2 = "50% rigtige, du er på retter vej"};
	if (result == 60) {result2 = "Du har god forstand, men du kan godt lære lidt mere "};
	if (result == 70) {result2 = "Du har god forstand, men du kan godt lære lidt mere"};
	if (result == 80) {result2 = "Du er så tæt på at ha en perfekt score!"};
	if (result == 90) {result2 = "Du er så tæt på at ha en perfekt score!"};
	if (result == 100) {result2 = "Du er helt klart til at flytte ud, tillykke!"};

	//får værdien til at blive set på siden
	document.getElementById("grade2").innerHTML = result2;

	return false; //hvis det ikke er der så refresher siden når vi klikker submit
} 
