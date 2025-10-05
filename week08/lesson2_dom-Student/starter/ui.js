import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'
// Step 1: Create an array to hold quote objects


// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById('quote-list')

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    if( !quoteList ) return

    const quotes = getAllQuotes() || []
    quoteList.innerHTML = ''

    if( !quotes.length ){
        const p = document.createElement("p")
        p.textContent = 'Quotes is empty.'
        quoteList.appendChild(p)
        return
    }

    const fragment = document.createDocumentFragment()
    for ( const q of quotes){
        const p = document.createElement('p')
        p.className = 'quote-item'
        p.textContent = `Author : ${q.author}` ? `Content : ${q.content} , Author : ${q.author}` : `Content : ${q.content}`
        fragment.appendChild(p)
    }
    quoteList.appendChild(fragment)
}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();
addQuote('Im so hungry.', 'Pluem')
addQuote('I want to have gf.', 'Win')
addQuote('Im gonna meet to my gf.', 'Fiat')
addQuote('Huh?', 'Fahsai')

renderQuotes();