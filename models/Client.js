const mongoose = require('mongoose');
const Client = require('../domain/Client');

const UsuarioSchema = mongoose.Schema({
    name: String,
    email: String,
    companId: String,
    permissions: String
}, {timestamps: true})

UsuarioSchema.loadClass(Client)
module.exports = mongoose.model('Client', UsuarioSchema);
