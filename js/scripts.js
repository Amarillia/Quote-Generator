var quotes = [
	"Don't cry because it's over, smile because it happened.", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Be yourself; everyone else is already taken.", "You are never too old to set another goal or to dream a new dream.", "If you can dream it, you can do it.", "Never give up, for that is just the place and time that the tide will turn.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "A room without books is like a body without a soul.", "No one can make you feel inferior without your consent."];

	var author = ["- Dr. Seuss","- Marilyn Monroe","- Oscar Wilde","- C.S Lewis", "- Walt Disney", "- Harriet Beecher Stowe","- Albert Einstein","- Bernard M. Baruch","- Marcus Tullius Cicero","- Eleanor Roosevelt"];

function newQuoteGen() {
	var newQuote = Math.floor(Math.random() * quotes.length);
	var newAuthor = Math.floor(Math.random() * quotes.length);

	document.getElementById('text').innerHTML = quotes[newQuote];
	document.getElementById('author').innerHTML = author[newAuthor];

}

newQuoteGen();
/*
var obj = { "Don't cry because it's over, smile because it happened.":   "- Dr. Seuss",
"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.":"- Marilyn Monroe",
"Be yourself; everyone else is already taken.":"- Oscar Wilde",
"You are never too old to set another goal or to dream a new dream.":"- C.S Lewis",
"If you can dream it, you can do it.":"- Walt Disney",
"Never give up, for that is just the place and time that the tide will turn.":"Harriet Beecher Stowe",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.":"- Albert Einstein",
"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.":"- Bernard M. Baruch",
"A room without books is like a body without a soul.":"- Marcus Tullius Cicero",
"No one can make you feel inferior without your consent.":"Eleanor Roosevelt"
};

function newQuoteGen() {
	var newQuote = Math.floor(Math.random() * quotes.length);
	var newAuthor = Math.floor(Math.random() * quotes.length);

	document.getElementById('text').innerHTML = quotes[newQuote];
	document.getElementById('author').innerHTML = author[newAuthor];

}

function Quote(quote, author){
	this.quote = quote;
	this.author = author;
}

function displayQuote(){
	var result = this.quote + ' ' + this.author;
}

newQuoteGen();*/