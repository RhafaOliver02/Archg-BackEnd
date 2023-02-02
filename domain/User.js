module.exports = class User {

    constructor(name, photo, email, companId, permissions) {
        this.name = name
        this.photo = photo
        this.email = email
        this.companId = companId
        this.permissions = permissions
    }
}