document.body.onload = reloadFieldValues()

function saveField(field) {
    if (field.value.trim() !== '') {
        localStorage.setItem(field.id, field.value)
    }
}

function reloadFieldValues() {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            clave = localStorage.key(i)
            document.getElementById(clave).value = localStorage.getItem(clave)
        }
    }
}
