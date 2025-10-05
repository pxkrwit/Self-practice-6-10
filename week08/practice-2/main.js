const box = document.getElementById("box")
document.querySelectorAll('button[data-color]').forEach( a => {
  a.addEventListener("click", () => {
    const color = a.dataset.color;
    box.style.backgroundColor = color
    box.textContent = color.toUpperCase()
  })
})