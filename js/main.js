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
// 	Alright! Finally, when the user clicks a card we want to display the image for the face of that 
//card in place of the back of the card. Right before the if statement where you are checking to see 
//if two cards have been played, use the setAttribute method to update the src attribute to the image 
//of the card that was just clicked, which is stored in the cardImage property in that card's object in the cards array.

// HINT: How can you access the cardImage property? Take a look at the line where we were logging 
//this property to the console in the last assignment for a hint:

// console.log(cards[cardId].cardImage

// HINT: Just as we did in the last step, we can use the this keyword to access the element 
// the user just clicked on. Except now instead of getting an attribute, we want to set the src attribute.

// HINT: We'll want to make sure that there are no quotation marks surrounding the new value 
//of the src attribute (cards[cardId].cardImage) when we use the setAttribute() method.

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
}
};
// In the last step we added a click event to each card, so that when each card is clicked, 
// the flipCard function will run. Before we can test things out, we'll need to make a few edits to our flipCard function.

// Remove the cardId parameter from the flip card function. We no longer want to hard-code the 
// index number of the card that should be flipped.  On the first line inside the flipCard function, 
// use the getAttribute method to get the data-id attribute of the card that was just clicked and store 
// it in a variable cardId.
// HINT: We can use the this keyword to access the card that was clicked: this.getAttribute('attribute-we-want-to-get-goes-here');
var flipCard = function () {
	cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if(cardsInPlay.length === 2) { 
	checkForMatch();
}
};
// In the main.js file, right after the flipCard function, write a new function called createBoard; as the name suggests, 
// this function will create a new game board. The createBoard function should not have any parameters.

// Now add each card to the board.

// Within the createBoard function, use a for loop to loop through the cards array.
// Here's a refresher on the syntax for a for loop:
// for (var i = 0; i < arrayName.length; i++) {

// }
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
// Now use the createElement method to create an img element and store it in a variable cardElement.

// HINT: Here's what the code for creating a list item would look like, for reference:

// var newListItem = document.createElement('li');

// In our project, we'll want to create an img element instead of a li.		
var cardElement = document.createElement('img');
// Now use the setAttribute() method to add a src attribute for the cardElement. The src should be "images/back.png"

// HINT: For reference, here's the syntax for setting an attribute: cardElement.setAttribute('attributeName', 'attributeValue');

// Now use the setAttribute() method once again to set the card's 'data-id' attribute to be the index of the current element, i (no quotes).

// NOTE: data- attributes are meant to store data about an element that is not tied to a style.
cardElement.setAttribute("src", "images/back.png");
cardElement.setAttribute("data-id", i);
// When each card is created (still within the for loop), we'll want to use the addEventListener() 
// method to add a click event to the cardElement. The function that we want to run when a user clicks 
// on a card is the flipCard function. Finally, use the appendChild() method to append the current cardElement
// to the game board (which has an id of game-board).
cardElement.addEventListener("click", flipCard);
document.getElementById("game-board").appendChild(cardElement);
}
}
createBoard ();
var reset = function () {
	location.reload();
}