const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("button-twitter");
const newBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Function to show a random quote
function generatingQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.quote;
    authorText.textContent= quote.author;

}

// Get quotes from API
async function getQuotes() {
    try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        apiQuotes = data.quotes || data; // Assume quotes are in data.quotes or directly in data
        generatingQuote();
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}
function tweet(){
    const tweeturl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(tweeturl, "_blank")
}
newBtn.addEventListener('click', generatingQuote)
twitterBtn.addEventListener("click", tweet)
getQuotes();