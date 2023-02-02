const mongoose = require('mongoose');
const User = require('../domain/User');

const UsuarioSchema = mongoose.Schema({

    name: String,
    photo: String,
    email: String,
    companId: String,
    permissions: String,

}, { timestamps: true })

UsuarioSchema.loadClass(User)
module.exports = mongoose.model('User', UsuarioSchema);