module.exports = class Client {

    constructor(name, email, companId, permissions) {

        this.name = name
        this.email = email
        this.companId = companId
        this.permissions = permissions
    }
}