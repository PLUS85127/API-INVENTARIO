const express = require('express');
const router = express.Router();
const AlmacenesController = require('../controllers/AlmacenesController');

router.post('/almacenes', AlmacenesController.createAlmacen);
router.get('/almacenes', AlmacenesController.getAllAlmacenes);
router.get('/almacenes/:id', AlmacenesController.getAlmacenById);
router.put('/almacenes/:id', AlmacenesController.updateAlmacen);
router.delete('/almacenes/:id', AlmacenesController.deleteAlmacen);

module.exports = router;
