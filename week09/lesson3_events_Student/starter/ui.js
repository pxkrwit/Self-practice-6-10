// Lesson 3 - Events Starter
import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js'
let quotes = []

// Select DOM elements
const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.querySelector('#randomQuoteDisplay')

function createQuoteElement(quote) {

  const divEl = document.createElement('div')
  divEl.dataset.id = quote.id

  const author = document.createElement('p')
  author.textContent = quote.author

  const content = document.createElement('p')
  content.textContent = quote.content

  const editBtn = document.createElement('button')
  editBtn.className = 'edit-btn'
  editBtn.textContent = "Edit"
  editBtn.dataset.id = quote.id

  editBtn.addEventListener('click', e => {
    contentInput.value = quote.content
    authorInput.value = quote.author
    idInput.value = quote.id
  })
  
  const rmBtn = document.createElement('button')
  rmBtn.className = 'delete-btn'
  rmBtn.textContent  = 'Delete'
  rmBtn.dataset.id = quote.id
  rmBtn.addEventListener('click', e => {
    deleteQuote(quote.id)
    deleteQuoteFromDOM(quote.id)
  })

  divEl.append(content,author,editBtn,rmBtn)
  return divEl

}


form.addEventListener('submit', e => {
  e.preventDefault()

  const newContent = contentInput.value
  const newAuthor = authorInput.value
  const id = idInput.value

  if(id === ''){
    const newQuote = addQuote(newContent,newAuthor)
    addQuoteToDOM(newQuote)
  }
  else {
    const update = updateQuote(Number(id),newContent,newAuthor)
    updateQuoteInDOM(update)
  }

  form.reset()
  idInput.value = ''
})

randomBtn.addEventListener('click', showRandomQuote)
// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const add = createQuoteElement(quote)
  quoteList.append(add)
}

function updateQuoteInDOM(quote) {
  const find = document.querySelector(`[data-id = "${quote.id}"]`)
  const update = find.querySelectorAll('p')
  update[0].textContent = quote.content
  update[1].textContent = quote.author
}

function deleteQuoteFromDOM(id) {
  const find = document.querySelector(`[data-id = "${id}"]`)
  find.remove()
}

function renderQuotes() {
  const clear = document.querySelector('#quote-list')
  clear.innerHTML = ''

  const quotes = getAllQuotes()
  for( let i in quotes){
    const newEl = createQuoteElement(quotes[i])
    quoteList.append(newEl)
  }
  
}
function showRandomQuote() {
  const all = getAllQuotes()
  let random = Math.floor(Math.random() * all.length)
  let select = all[random]
  randomDisplay.textContent = `${select.content} — ${select.author}`
}
// Event listeners for form submission, edit, and delete clicks
