const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// fetching quotes from an api
// let apiQuotes = [];

// function to show loading
function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//function to hide loading
function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  //picking a random quote
  showLoadingSpinner();

  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // check if athor is empty and replace it with unkown
  if (!quote.author) {
    authorText.textContent = ' Unkown';
  } else {
    authorText.textContent = quote.author;
  }

  // check length of quote an style it

  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  //  set quote, hide loader

  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// async function getQuotes() {
// showLoadingSpinner();
// const apiUrl =" ";

// try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//    newQuote();

// } catch (error) {

// }

// }

// upon loading

// getQuotes();

// Tweeting the qoute
function tweetQuote() {
  const twittwerUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twittwerUrl, '_blank');
}

//Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote();
