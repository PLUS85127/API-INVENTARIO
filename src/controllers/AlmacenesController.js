const Almacenes = require('../models/Almacenes');

exports.createAlmacen = async (req, res) => {
    try {
        const nuevoAlmacen = new Almacenes(req.body);
        await nuevoAlmacen.save();
        res.status(201).json(nuevoAlmacen);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllAlmacenes = async (req, res) => {
    try {
        const almacenes = await Almacenes.find();
        res.status(200).json(almacenes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAlmacenById = async (req, res) => {
    try {
        const almacen = await Almacenes.findById(req.params.id);
        res.status(200).json(almacen);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAlmacen = async (req, res) => {
    try {
        const almacen = await Almacenes.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(almacen);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteAlmacen = async (req, res) => {
    try {
        await Almacenes.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Almacén eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
