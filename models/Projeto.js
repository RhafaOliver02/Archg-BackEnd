const mongoose = require('mongoose');
const Projeto = require('../domain/Projeto');


//esquema para indexar o banco 
const UsuarioSchema = mongoose.Schema({
    name: String,
    fase: String,
    team: String,
    hdev: String,
    hprod: String,
    companId: String,
    clientid: String,
    foldersid: String,
    teamlider: String,
    totalpages: String,
    labelScheme: String,
    permissions: String
}, {timestamps: true})

UsuarioSchema.loadClass(Projeto)
module.exports = mongoose.model('Projeto', UsuarioSchema);