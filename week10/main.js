document.addEventListener('DOMContentLoaded', e => {
    const bgColor = document.getElementById('bgColor')
    const fontColor = document.getElementById('fontColor')
    const fontSize = document.getElementById('fontSize')
    const saveBtn = document.getElementById('saveBtn')
    const resetBtn = document.getElementById('resetBtn')

    const saveBg = localStorage.getItem('bgColor')
    if (saveBg) {
        document.body.style.backgroundColor = saveBg
        bgColor.value = saveBg
    }
    else {
        document.body.style.backgroundColor = 'white'
        bgColor.value = 'white'
    }

    const saveFontColor = localStorage.getItem('fontColor')
    if (saveFontColor) {
        document.body.style.color = saveFontColor
        fontColor.value = saveFontColor
    }
    else {
        document.body.style.color = 'black'
        fontColor.value = 'black'
    }

    const saveFontSize = localStorage.getItem('fontSize')
    if (saveFontSize) {
        document.body.style.fontSize = saveFontSize
        fontSize.value = saveFontSize
    }
    else {
        document.body.style.fontSize = 'medium'
        fontSize.value = 'medium'
    }

    saveBtn.addEventListener('click', e => {
        const bgColorValue = bgColor.value
        const fontSizeValue = fontSize.value
        const fontColorValue = fontColor.value

        localStorage.setItem('bgColor', bgColorValue)
        localStorage.setItem('fontColor', fontColorValue)
        localStorage.setItem('fontSize', fontSizeValue)

        document.body.style.backgroundColor = bgColorValue
        document.body.style.fontSize = fontSizeValue
        document.body.style.color = fontColorValue
    })

    resetBtn.addEventListener('click', e => {
        localStorage.clear()

        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        document.body.style.fontSize = 'medium'

        bgColor.value = 'white'
        fontColor.value = 'black'
        fontSize.value = 'medium'
    })
})