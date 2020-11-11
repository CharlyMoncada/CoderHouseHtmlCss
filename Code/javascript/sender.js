function sendEmail() {
    // debugger
    var person = GetPerson()
    alert(person.fullName() + " esta funcionalidad aun no esta implementada - Por favor comunicarse desde los iconos debajo de la pantalla")
}

function GetPerson() {
    var name = document.getElementById("nombre").value
    var lastName = document.getElementById("apellido").value
    var telephone = document.getElementById("telefono").value
    var email = document.getElementById("email").value
    return new Person(name, lastName, telephone, email)
}