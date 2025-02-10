const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    contacto: {
        nombre: { type: String, required: true },
        telefono: { type: String, required: true },
        email: { type: String, required: true },
    },
    direccion: {
        calle: { type: String},
        ciudad: { type: String},
        pais: { type: String},
    },
});

module.exports = mongoose.model('Proveedor', proveedorSchema);