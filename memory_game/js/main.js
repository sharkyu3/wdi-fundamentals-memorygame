const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
if(cardsInPlay.length === 2){
	if (cardOne === cardTwo) {
		result = alert("You found a match!");
	} else{
		result = alert("Sorry,try again.");
	}
}

