let name = document.getElementById("nombre")
let lastName = document.getElementById("apellido")
let telephone = document.getElementById("telefono")
let email = document.getElementById("email")

function focus(campo) {
    campo.style.backgroundColor = "rgb(251, 195, 175)"
}

function normal(campo) {
    campo.style.backgroundColor = "white"
}

name.addEventListener("focus", () => focus(name))
lastName.addEventListener("focus", () => focus(lastName))
telephone.addEventListener("focus", () => focus(telephone))
email.addEventListener("focus", () => focus(email))

name.addEventListener("blur", () => normal(name))
lastName.addEventListener("blur", () => normal(lastName))
telephone.addEventListener("blur", () => normal(telephone))
email.addEventListener("blur", () => normal(email))

