const mongoose = require('mongoose');
const Projeto = require('../domain/Projeto');


//esquema para indexar o banco 
const UsuarioSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
      },
    fase: {
        type: String,
        require: true,
      },
    team: {
        type: Array,
        require: true,
      },
    hdev: {
        type: String,
        require: true,
      },
    hprod: {
        type: String,
        require: true,
      },
    companId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    clientid: String,
    foldersid: String,
    teamlider: String,
    totalpages: String,
    labelScheme: String,
    permissions: String
}, {timestamps: true})

UsuarioSchema.loadClass(Projeto)
module.exports = mongoose.model('Projeto', UsuarioSchema);