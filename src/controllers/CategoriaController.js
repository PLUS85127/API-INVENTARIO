const Categoria = require('../models/Categoria');

exports.createCategoria = async (req, res) => {
    try {
        const nuevaCategoria = new Categoria(req.body);
        await nuevaCategoria.save();
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCategoriaById = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id);
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(categoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCategoria = async (req, res) => {
    try {
        await Categoria.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Categoría eliminada" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
