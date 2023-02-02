module.exports = class Usuario {

    constructor(email, nome, senha, dataCadastro) {

        this.nome = nome
        this.email = email
        this.senha = senha
        this.dataCadastro = dataCadastro
    }
}
