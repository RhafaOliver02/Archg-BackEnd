const mongoose = require('mongoose');
const Company = require('../domain/Company');

const UsuarioSchema = mongoose.Schema({
    name: String,
    email: String,
    companId: String,
    permissions: String
}, {timestamps: true})

UsuarioSchema.loadClass(Company)
module.exports = mongoose.model('Company', UsuarioSchema);
