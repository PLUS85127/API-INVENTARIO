const Personal = require('../models/Personal');

exports.createPersonal = async (req, res) => {
    try {
        const nuevoPersonal = new Personal(req.body);
        await nuevoPersonal.save();
        res.status(201).json(nuevoPersonal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllPersonal = async (req, res) => {
    try {
        const personal = await Personal.find();
        res.status(200).json(personal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPersonalById = async (req, res) => {
    try {
        const personal = await Personal.findById(req.params.id);
        res.status(200).json(personal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePersonal = async (req, res) => {
    try {
        const personal = await Personal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(personal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePersonal = async (req, res) => {
    try {
        await Personal.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Personal eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
