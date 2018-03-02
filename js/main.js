var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
// Almost there! To add a little extra organization to our code, let's create a function to store the steps to check for a match.
// Right below the cardsInPlay array and right above the flipCard function, create a function checkForMatch. This function will not have any parameters.
// Move the following lines of code into the checkForMatch function.
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
}
};
// In your main.js file, after the lines with the cards and cardsInPlay arrays, create a function flipCard.
// The function should accept one parameter: cardId.
// Move all the code that you wrote for the last unit's assignment, except for the cards and cardsInPlay arrays into the flipCard function.
// NOTE: We are leaving the two arrays outside of the flipCard function since we want to make sure that the two arrays have global scope.
var flipCard = function (cardId) {
// 	Within the flipCard function, add a console.log() statement to display the card that was flipped over.
// We'll use the index number that is passed in when the flipCard function is called to access this card from the cards array like so: cards[cardId].
// The message that is logged in the console should read "User flipped queen" or "User flipped king".
	console.log("User flipped "+ cards[cardId]);
	checkForMatch();
;
};
// 	Next, we'll want to add the card that the user flipped to the cardsInPlay array.
// Use the push method to add the card that the user flipped (cards[cardId]) to the cardsInPlay array.
cardsInPlay.push(cards[cardId]);
// Now let's call the flipCard function to simulate the user flipping a card.

// On the line after the flipCard function, call the flipCard function, passing in 0 as an argument.
flipCard(0);
// Now, on the next line, call the flipCard function again, passing in 2 as an argument.
// These numbers we are passing in as arguments represent the index numbers of the cards in the cards array that we want to flip over.
flipCard(2);