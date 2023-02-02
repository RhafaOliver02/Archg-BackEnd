const mongoose = require('mongoose');
const Folder = require('../domain/Folder');


//esquema para indexar o banco 
const UsuarioSchema = mongoose.Schema({

    name: String,
    file: String
}, {timestamps: true})

UsuarioSchema.loadClass(Folder)
module.exports = mongoose.model('Folder', UsuarioSchema);