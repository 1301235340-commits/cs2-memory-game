console.log("Script started");
//variable to track guesses
let guesses = 0;

//var to track first pard pick(empty to start)
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId) {
    //print click to console to test that click works
    console.log("Click");
    //this gets the html card
    let card = document.getElementById(cardId);
    //change color to flip card and reveal text
    card.style.color = "white"
    card.style.backgroundColor = "Brown"

    //which pick it is
    if(firstCardId == "") {
    //store 1st card id
    firstCardId = cardId;
    console.log("first =" + firstCardId);
    }
    else{
        //store 2nd card id
    secondCardId = cardId
    //checkForMatch();
    setTimeout(checkForMatch, 1000)
    console.log("first =" + secondCardId);
    }



    function cheakForMath() {
        //get the card elements
        let firstCard = document.getElementById(firstCardId);
        let sencondCard = document.getElementById(sencondCardId);

        if (firstCard.innerText == secondCard.innerText){
            firtsCard.style.backgroundColor = "lightgreen";
            secondCard.style.backgroundColor = "lightgreen";
        }
    
    }

    else {
        //cards dont match
        firstCard.style.color = "darkred";
        firstCard.style.backgroundColor = "darkred";
        secondCard.style.color = "darkred";
        secondCard.style.backgroundColor = "darkred";
    }

    //reset for next pick
    firstCardId = "";
    secondCardId = "";
}