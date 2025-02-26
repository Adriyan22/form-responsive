
const email = document.querySelector('input[type="email"]')
const senha = document.querySelector('input[type="password"]')
const btnSubmit = document.querySelector('button[type="submit"]')

const verificacao = () => {
    if(email.value){
        sessionStorage.setItem("Email", email.value)
        console.log(sessionStorage.getItem("Email"))
    }

    if(senha.value){
        sessionStorage.setItem("Senha", senha.value)
        console.log(sessionStorage.getItem("Senha"))
    }
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    verificacao()
    location.href = './login.html'
})







