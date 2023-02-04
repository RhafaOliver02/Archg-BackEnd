module.exports = class User {

    constructor(name, photo, email, companId, permissions, token) {
        this.name = name
        this.photo = photo
        this.email = email
        this.token = token
        this.companId = companId
        this.permissions = permissions
    }
}