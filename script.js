
// déclaration des variable global
let number1 = 0
let number2 = 0
let anwser = 0
let grassCount = 0
let score = 0
let grassTotal = 0

// fonctions pour générer les nombre pour les questrion
function nmbgenerator1(grass){
  if (number1==0) {
    if (grass==1) {
      number1 = Math.floor((Math.random() * 11) + 2)
    } else if (grass==2) {
      number1 = Math.floor((Math.random() * 18) + 13)
    }
  } else if (number1!=0 && number2==0) {
    if (grass==1) {
      number2 = Math.floor((Math.random() * 11) + 2)
    } else if (grass==2) {
      number2 = Math.floor((Math.random() * 18) + 13)
    }
    calcule(number1, number2)
    noClick()
  }

  grassCount += grass
}

function nmbgenerator2(grass){
  if (number1==0) {
    if (grass==1) {
      number1 = Math.floor((Math.random() * 9) + 7)
    } else if (grass==2) {
      number1 = Math.floor((Math.random() * 28) + 23)
    }
  } else if (number1!=0 && number2==0) {
    if (grass==1) {
      number2 = Math.floor((Math.random() * 9) + 7)
    } else if (grass==2) {
      number2 = Math.floor((Math.random() * 28) + 23)
    }
    calcule(number1, number2)
    noClick()
  }

  grassCount += grass
}

function nmbgenerator3(grass){
  if (number1==0) {
    if (grass==1) {
      number1 = Math.floor((Math.random() * 18) + 13)
    } else if (grass==2) {
      number1 = Math.floor((Math.random() * 65) + 36)
    }
  } else if (number1!=0 && number2==0) {
    if (grass==1) {
      number2 = Math.floor((Math.random() * 18) + 13)
    } else if (grass==2) {
      number2 = Math.floor((Math.random() * 65) + 36)
    }
    calcule(number1, number2)
    noClick()
  }

  grassCount += grass
}

// fonction qui détermine l'oppération et fait le calcule
function calcule(nmb1, nmb2){
  let opperation = Math.floor((Math.random() * 4) + 1)

  if (opperation==1){
    anwser = nmb1 + nmb2
  } else if (opperation==2){
    anwser = nmb1 - nmb2
  } else if (opperation==3){
    anwser = nmb1 * nmb2
  } else if (opperation==4){
    anwser = nmb1 / nmb2
  }
  question(nmb1, nmb2, opperation)
}

// fonction pour réinstaliser tout
function reset(){
  number1 = 0
  number2 = 0
  let clearUserAnwser = document.getElementById("userAnwser")
  clearUserAnwser.value = ""
  document.getElementById("lightgrass2").style.pointerEvents = "auto"
  document.getElementById("lightgrass1").style.pointerEvents = "auto"
  document.getElementById("lightgrass3").style.pointerEvents = "auto"
  document.getElementById("lightgrass4").style.pointerEvents = "auto"
  document.getElementById("lightgrass5").style.pointerEvents = "auto"
  document.getElementById("lightgrass6").style.pointerEvents = "auto"
  document.getElementById("lightgrass7").style.pointerEvents = "auto"
  document.getElementById("lightgrass8").style.pointerEvents = "auto"
  document.getElementById("lightgrass9").style.pointerEvents = "auto"
  document.getElementById("lightgrass10").style.pointerEvents = "auto"
  document.getElementById("lightgrass11").style.pointerEvents = "auto"
  document.getElementById("lightgrass12").style.pointerEvents = "auto"
  document.getElementById("darkgrass1").style.pointerEvents = "auto"
  document.getElementById("darkgrass2").style.pointerEvents = "auto"
  document.getElementById("darkgrass3").style.pointerEvents = "auto"
  document.getElementById("darkgrass4").style.pointerEvents = "auto"
}

// fonction qui affiche la question sur la page
function question(nmb1, nmb2, sign){
  if (sign==1){
    sign = "+"
  } else if (sign==2){
    sign = "-"
  } else if (sign==3){
    sign = "*"
  } else if (sign==4){
    sign = "/"
  }
  
  
  let nice = String(nmb1 + " " + sign + " " + nmb2 + " = ")


  questions.innerHTML = nice
}


// fonction pour vériier la réponse et ajouté au score
function submitAnwser(lvl){
  let levelScore
  let messageResultat = ""
  anwser = parseFloat(anwser.toFixed(2))
  let userAnwser
  if (lvl==1) {
    levelScore = 1
  } else if(lvl==2) {
    levelScore = 2.5
  } else if (lvl==3) {
    levelScore = 7.5
  }
  userAnwser = parseFloat(document.getElementById("userAnwser").value)

  grassTotal += grassCount

  if (grassTotal == 20) {
    levelComplete = "<h1 style='color:white'>Bravo !</h1>";
      
    levelCompletionDisplay = document.getElementById("zoneNiveau");
    levelCompletionDisplay.innerHTML = levelComplete;
  }
  
  if (userAnwser==anwser){
    messageResultat = "Bravo!"
    
    score += grassCount*10*levelScore
    
    scoreDisplay = document.getElementById("scoreMontant");
    scoreDisplay.innerHTML = score;
    
  } else {
    messageResultat = "La réponse est: " + anwser
  }
  grassCount = 0
  
  confirmation.innerHTML = messageResultat
  reset()
}


// Fonction pour prévenire que les utilisateur clique sur plus de 2 case par question
function noClick(){
  document.getElementById("lightgrass2").style.pointerEvents = "none"
  document.getElementById("lightgrass1").style.pointerEvents = "none"
  document.getElementById("lightgrass3").style.pointerEvents = "none"
  document.getElementById("lightgrass4").style.pointerEvents = "none"
  document.getElementById("lightgrass5").style.pointerEvents = "none"
  document.getElementById("lightgrass6").style.pointerEvents = "none"
  document.getElementById("lightgrass7").style.pointerEvents = "none"
  document.getElementById("lightgrass8").style.pointerEvents = "none"
  document.getElementById("lightgrass9").style.pointerEvents = "none"
  document.getElementById("lightgrass10").style.pointerEvents = "none"
  document.getElementById("lightgrass11").style.pointerEvents = "none"
  document.getElementById("lightgrass12").style.pointerEvents = "none"
  document.getElementById("darkgrass1").style.pointerEvents = "none"
  document.getElementById("darkgrass2").style.pointerEvents = "none"
  document.getElementById("darkgrass3").style.pointerEvents = "none"
  document.getElementById("darkgrass4").style.pointerEvents = "none"
}
