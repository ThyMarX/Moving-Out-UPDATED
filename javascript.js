// JavaScript Document for Eksamensprojekt 2. Semester 
// Julie Kløv, Maya Geisler, Thomas Siemsen



//slideshow til forsiden
let slideIndex = 1;
showDivs(slideIndex);
setTimeout(autoPlusDivs, 8000);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function autoPlusDivs(){
	plusDivs(1);
	setTimeout(autoPlusDivs, 8000);
}

function showDivs(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {
	  slideIndex = 1;
  }
  if (n < 1) {
	  slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" white", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  
}



