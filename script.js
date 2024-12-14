let irCadastro = document.getElementById("irCadastro")
let cadastro = document.getElementById("cadastro")
let irLogin = document.getElementById("irLogin")
let login = document.getElementById("login")

function irParaCadastro() {
    cadastro.style = "display: block"
    login.style = "display: none"
}

irCadastro.addEventListener('click', irParaCadastro)


function irParaLogin() {
    login.style = "display: block"
    cadastro.style = "display: none"
}

irLogin.addEventListener('click', irParaLogin)


let loginContinuar = document.getElementById("loginContinuar")
let loginAviso = document.getElementById("loginAviso")

function loginParaContinuar(event) {
    event.preventDefault()

    let loginEmail = document.getElementById("loginEmail")
    let loginSenha = document.getElementById("loginSenha")

    if ((loginEmail.value), (loginSenha.value) == '') {
        loginAviso.style = "display: block;"
    } else {
        window.alert("Login feito com sucesso.")
    }
}

loginContinuar.addEventListener('click', function(event) {
    loginParaContinuar(event)
})


let cadastroContinuar = document.getElementById("cadastroContinuar")
let cadastroAviso = document.getElementById("cadastroAviso")

function cadastroParaContinuar(event) {
    event.preventDefault()

    let cadastroNome = document.getElementById("cadastroNome").value
    let cadastroEmail = document.getElementById("cadastroEmail").value
    let cadastroSenha = document.getElementById("cadastroSenha").value

    if (cadastroNome, cadastroEmail, cadastroSenha == '') {
        cadastroAviso.style = "display: block;"
    } else {
        window.alert("Cadastro feito com sucesso.")
    }
}

cadastroContinuar.addEventListener('click', function(event) {
    cadastroParaContinuar(event)
})