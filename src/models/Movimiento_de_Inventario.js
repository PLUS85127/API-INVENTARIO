const mongoose = require('mongoose');

const movimientoDeInventarioSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    cantidad: { type: Number, required: true },
    fecha: { type: Date, required: true },
    notas: { type: String, required: true },
    personal_responsable: { type: String, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Movimiento_de_Inventario', movimientoDeInventarioSchema);
