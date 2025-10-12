const input = document.getElementById("keyInput")
const message = document.getElementById("keyLog")

function log( mess,color){
    const p = document.createElement('p')
    p.style.color = color
    p.textContent = mess
    message.append(p)
}

input.addEventListener('keyup', e => {
    const key = e.key
    if (key === 'Enter'){
        log(`You pressed: ${key}` , 'blue')
        return
    }
    log(`You pressed: ${key}` , 'black')
    return
})

