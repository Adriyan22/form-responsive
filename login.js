const email = document.querySelector('input[type = "text"]')
const senha = document.querySelector('input[type = "password"]')
const btnSubmit = document.querySelector('input[type = "submit"]')


function verificacao(){
    if(email.value){
        sessionStorage.setItem("email", email.value)
        console.log(sessionStorage.getItem("email"))
    }

   
    if(senha.value){
        sessionStorage.setItem("senha", senha.value)
        console.log(sessionStorage.getItem("senha"))
    }
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    verificacao()
})

