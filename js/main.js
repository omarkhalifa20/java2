var quote = document.getElementById("quoteOutput");
var author = document.getElementById("authorOutput");
var lastwords = 0; 

var quotes = [
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "So many books, so little time.",
        author: "Marilyn Monroe"
    },
    {
        text: "A room without books is like a body without a soul.",
        author: "Frank Zappa"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Albert Einstein"
    },
    {
        text: "A friend is someone who knows all about you and still loves you.",
        author: "Bernard M. Baruch"
    }
];

function generateQuote() {
    var randomwords;
    
    randomwords = Math.floor(Math.random() * quotes.length);
    if(randomwords === lastwords) {
        randomwords = (randomwords + 1) % quotes.length;
    }
    
    lastwords = randomwords;
    
    quote.innerHTML = `${quotes[randomwords].text}`;
    author.innerHTML = `- ${quotes[randomwords].author}`;
}