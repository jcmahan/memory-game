// Delete the four strings from the cards array.
// In the cards array, create four objects, one for each card.
// var myArray = [
// {
// color: 'red',
// flower: 'rose',
// petals: 20
// },
// rank	suit	cardImage
// "queen"	"hearts"	"images/queen-of-hearts.png"
// "queen"	"diamonds"	"images/queen-of-diamonds.png"
// "king"	"hearts"	"images/king-of-hearts.png"
// "king"	"diamonds"	"images/king-of-diamonds.png"
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
}
};
// Now that we have our card objects, we'll want to update lines of code where we were accessing values from the cards array to reflect these changes.
// In the flipCard function, find this console.log statement: console.log("User flipped " + cards[cardId]);
// Update the portion cards[cardId]. Right now, this code is accessing the entire first object in the cards array. You'll want to update this code so that we are accessing the rank property of this object.
// HINT: We'll give you this one, and you can use this as a reference for the next two steps. Update this to cards[cardId].rank.
var flipCard = function (cardId) {
	console.log("User flipped "+ cards[cardId].rank);
	checkForMatch();
// Next update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);. You'll want to push the name of the card ("queen" or "king") to the cardsInPlay array.
// HINT: You'll want to use the rank property like we did in the last step.
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};
flipCard(0);
flipCard(2);