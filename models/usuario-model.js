const mongoose = require('mongoose');
const Task = require('../domain/Task');
const Usuario = require('../domain/usuario');


//esquema para indexar o banco 
const UsuarioSchema = mongoose.Schema({
    email: String,
    nome: String,
    senha: String,
    dataCadastro: Date
}, { timestamps: true })

UsuarioSchema.loadClass(Usuario)
module.exports = mongoose.model('User', UsuarioSchema);

