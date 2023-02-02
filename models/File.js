const mongoose = require('mongoose');
const File = require('../domain/File');


//esquema para indexar o banco 
const UsuarioSchema = mongoose.Schema({

    name: String,
    file: String,
    taskid: String,
    reviewid: String,
    projectid: String
}, {timestamps: true})

UsuarioSchema.loadClass(File)
module.exports = mongoose.model('File', UsuarioSchema);