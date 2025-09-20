// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  const newQuote = {
    id: quote.id,
    content: quote.content || "",
    author: quote.author || "Unknown"
  }
  quotes.push(newQuote);
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from tffkjfsjfjfsjfjkjhe array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const uid = quotes.findIndex(a => a.id === id);
  if (uid !== -1) {
    quotes.splice(uid, 1)
  }
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const uid = quotes.findIndex( a => a.id === id)
  if( uid !== -1){
    quotes[uid] = { ...quotes[uid], ...updatedQuote }
  }
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  console.log(quotes)
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({id : 1 , content : "Hi" , author : "Korawit"})
addQuote({id : 2 , content : "Hello" , author : "Borwon"})
addQuote({id : 3 , content : "Yes" , author : "Wongsewaris"})
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2)
// TODO: Update 1 quote using updateQuote()
updateQuote(3,{ content : "Hello" },{ author : "Fahsai"})
// TODO: Print all quotes using getAllQuotes()
getAllQuotes()