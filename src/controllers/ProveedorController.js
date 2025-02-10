const Proveedor = require('../models/Proveedor');

// Crear
exports.createProveedor = async (req, res) => {
    try {
        const nuevoProveedor = new Proveedor(req.body);
        await nuevoProveedor.save();
        res.status(201).json(nuevoProveedor); //201 Created
    } catch (error) {
        res.status(400).json({ message: error.message }); //400 Solicitud incorrecta
    }
};

// Obtener todos
exports.getAllProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.status(200).json(proveedores); //200 solicitud exitosa
    } catch (error) {
        res.status(500).json({ message: error.message }); //500 error interno del servidor
    }
};

// Obtener por ID
exports.getProveedorById = async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        res.status(200).json(proveedor); // 200 solicitud exitosa
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 error interno del servidor
    }
};

// Actualizar
exports.updateProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(proveedor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar
exports.deleteProveedor = async (req, res) => {
    try {
        await Proveedor.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Proveedor eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};