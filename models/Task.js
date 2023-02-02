const mongoose = require('mongoose');
const Task = require('../domain/Task');

const UsuarioSchema = mongoose.Schema({

    tipo: String,
    field: String,
    title: String,
    origin: String,
    status: String,
    companyid: String, 
    projectid: String,
    assignedto: String,
    description: String,
    deliverydate: Date

}, {timestamps: true});

UsuarioSchema.loadClass(Task)
module.exports = mongoose.model('Task', UsuarioSchema);