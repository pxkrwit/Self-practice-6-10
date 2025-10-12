const form = document.querySelector('form')
const uname = document.getElementById('username')
const email = document.getElementById('email')
const pass = document.getElementById('password')
const confirmpw = document.getElementById('confirm-password')
const message = document.querySelector('p')

form.addEventListener('submit', function(event){
    event.preventDefault()

    message.textContent = ''
    message.className = ''

    if ( uname.value.trim() === '' || email.value.trim() === '' || pass.value.trim() === '' || confirmpw.value.trim() === '') {
        message.textContent = 'Missing some values , Please try again!'
        message.style.color = 'red'
        message.classList.add('error')
        return
    }

    if ( pass.value !== confirmpw.value ){
        message.style.color = 'red'
        message.textContent = 'Password and confirm do not match , Check again!'
        message.classList.add('error')
        return
    }

    message.textContent = 'Your data completed!'
    message.style.color = 'green'
    message.classList.add('success')
})
