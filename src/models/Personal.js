const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    Nombre: { type: String, required: true },
    Telefono: { type: String, required: true },
    Rol: { type: String, required: true },
    Direccion: { type: String, required: true },
    Correo: { type: String, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Personal', personalSchema);
