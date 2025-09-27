//<p format="italic"><i>Sample Italic Text</i></p>
let el = document.getElementById("demo")

//1. append <p> under <div id="demo">
let stElement = document.createElement("p")
let ndElement = document.createElement("p")
let thElement = document.createElement("p")

//1.5 add format='italic' attribute to <p>
stElement.setAttribute("format","italic")
ndElement.setAttribute("format","italic")
thElement.setAttribute("format","italic")

//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
stElement.innerHTML = '<i>Sample italic Text</i>'
//2.2  add <i>Sample Italic Text</i> with innerText
ndElement.innerText = '<i>Sample italic Text</i>'
//2.3 add <i>Sample Italic Text</i> with textContent
thElement.textContent = '<i>Sample italic Text</i>'

el.appendChild(stElement)
el.appendChild(ndElement)
el.appendChild(thElement)