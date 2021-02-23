let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {

        // Catch Error Here
    }
}

// On load
getQuotes();


// // Get quote from API
// async function getQuote() {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
//     try {
//         const response = await fetch(proxyUrl + apiUrl);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         // getQuote();
//         console.log('whoops, no quote', error);
//     }
// }

// //  On Load
// getQuote();