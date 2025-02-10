const Movimiento_de_Inventario = require('../models/Movimiento_de_Inventario');

exports.createMovimiento = async (req, res) => {
    try {
        const nuevoMovimiento = new Movimiento_de_Inventario(req.body);
        await nuevoMovimiento.save();
        res.status(201).json(nuevoMovimiento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllMovimientos = async (req, res) => {
    try {
        const movimientos = await Movimiento_de_Inventario.find();
        res.status(200).json(movimientos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMovimientoById = async (req, res) => {
    try {
        const movimiento = await Movimiento_de_Inventario.findById(req.params.id);
        res.status(200).json(movimiento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMovimiento = async (req, res) => {
    try {
        const movimiento = await Movimiento_de_Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(movimiento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMovimiento = async (req, res) => {
    try {
        await Movimiento_de_Inventario.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Movimiento eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
