console.log("Up and running!");
var cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png",

	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png",

	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png",

	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png",

	}
	];
var cardsInPlay = [];
function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
      alert('You found a match!');
	 }else{
		alert('Sorry try again.');
	}
}
function flipCard(){
	var cardId = this.getAttribute('data-id')
	console.log("User Flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
	checkForMatch();
}
}
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		
	};

};

createBoard();