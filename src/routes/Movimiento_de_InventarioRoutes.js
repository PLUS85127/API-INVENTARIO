const express = require('express');
const router = express.Router();
const Movimiento_de_InventarioController = require('../controllers/Movimiento_de_InventarioController');

router.post('/movimientos', Movimiento_de_InventarioController.createMovimiento);
router.get('/movimientos', Movimiento_de_InventarioController.getAllMovimientos);
router.get('/movimientos/:id', Movimiento_de_InventarioController.getMovimientoById);
router.put('/movimientos/:id', Movimiento_de_InventarioController.updateMovimiento);
router.delete('/movimientos/:id', Movimiento_de_InventarioController.deleteMovimiento);

module.exports = router;
