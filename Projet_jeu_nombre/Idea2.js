let minimumValue = 10
let maximumValue = 50  
let range = document.body.innerHTML

function firstPlayer() {
   range = `Le nombre est compris entre ${minimumValue} et ${maximumValue}`
   document.getElementById("submit1").addEventListener("click", function () {
      document.getElementById("joueur1").style.display = "none"
      document.getElementById("joueur2").style.display = "block"
      document.getElementById("resultat").style.display = "none"
      secondPlayer()
   })
}

function secondPlayer() {
   document.getElementById("range").innerHTML = `${range}`
   document.getElementById("submit2").addEventListener("click", function () {
      let guessednumber = document.getElementById("number2").value
      document.getElementById("joueur2").style.display = "none"
      document.getElementById("resultat").style.display = "none"
      compare()
   })
 }

let compteur = 0

function compare() {
   compteur++;
   let numberToGuess = document.getElementById("number1").value;
   let newGuess;

   while (true) {
       newGuess = document.getElementById("number2").value;

       if (numberToGuess == newGuess) {
           document.getElementById("resultat").style.display = "block";
           document.getElementById("resultat").innerHTML = ` ✨ Tu as gagné !! Bravo ! Tu as réussi après ${compteur} tentatives. ✨`;
           break;
       } else {
           if (compteur==1){
           alert(`Essaye encore !! Tu es à ${compteur} tentative.`);
           }else{alert(`Essaye encore !! Tu es à ${compteur} tentatives.`);}
           if (newGuess<numberToGuess){
           minimumValue = newGuess;
           }else{maximumValue = newGuess}
           range = `Le nombre est compris entre ${minimumValue} et ${maximumValue}`
           document.getElementById("range").innerHTML = `${range}`
           document.getElementById("joueur2").style.display = "block";
           break;
       }
   }
}


firstPlayer()
