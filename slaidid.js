//Tehtud https://www.w3schools.com/w3css/w3css_slideshow.asp abil
var slideIndex = 1; //Paneb piltide indeksiks 1
showDivs(slideIndex); //Rakendab showdivs funktsiooni kohal slideIndex

function plusDivs(n) { //Defineerin plusDivs(n) funktsiooni
  showDivs(slideIndex += n); //Rakendab showDivs funktsiooni kohal slideIndex 
}

function showDivs(n) { //Defineerin showDivs(n) funktsiooni
  var i; //Defineerin muutuja i
  var x = document.getElementsByClassName("slides"); //Defineerin muutuja x ja annan väärtuse
  if (n > x.length) {slideIndex = 1} //Vaatan kas n on suurem kui x pikkus
  if (n < 1) {slideIndex = x.length} ; //Vaatan kas n on väiksem kui 1
  for (i = 0; i < x.length; i++) { //Defineerin tsükkli
	x[i].style.display = "none"; //Muudan displayks 'none'
  }
  x[slideIndex-1].style.display = "block"; //Muudan displayks 'block'
}
