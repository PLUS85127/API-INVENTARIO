const mongoose = require('mongoose');

const almacenesSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ubicacion: {
        ciudad: { type: String, required: true },
        pais: { type: String, required: true }
    }
}, { versionKey: false });

module.exports = mongoose.model('Almacenes', almacenesSchema);
