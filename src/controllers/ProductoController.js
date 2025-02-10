const Producto = require('../models/Producto');

//Crer
exports.createProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto); //201 Created
    } catch (error) {
        res.status(400).json({ message: error.message }); //400 Solicitud incorrecta
    }
};

//Obtener
exports.getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos); //200 solicitud exitosa
    } catch (error) {
        res.status(500).json({ message: error.message }); //500 error interno del servidor
    }
};

//Obtener por ID
exports.getProductoId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        res.status(200).json(producto); //200 solicitud exitosa
    } catch (error) {
        res.status(500).json({ message: error.message }); //500 error interno del servidor
    }
};

//Actualizar
exports.updateProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(producto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Eliminar
exports.deleteProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};