const mongoose = require('mongoose');
const Review = require('../domain/Review');


//esquema para indexar o banco 
const UsuarioSchema = mongoose.Schema({
    file: String,
    name: String,
    field: String,
    status: String
}, {timestamps: true});

UsuarioSchema.loadClass(Review)
module.exports = mongoose.model('Review', UsuarioSchema);