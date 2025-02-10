const mongoose = require('mongoose');

//producto
const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    
    proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor' },

}, {versionKey: false});

module.exports = mongoose.model('Producto', productoSchema); 