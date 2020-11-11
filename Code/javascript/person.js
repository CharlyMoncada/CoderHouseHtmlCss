class Person {
    constructor(name, lastName, telephone, email) {
        this.name = name
        this.lastName = lastName
        this.telephone = telephone
        this.email = email
    }

    fullName() {
        return this.name + " " + this.lastName
    }
}