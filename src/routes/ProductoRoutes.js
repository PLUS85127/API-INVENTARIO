const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/ProductoController');

//Rutas
//Crear
router.post('/productos', ProductoController.createProducto);

//Obtener todos los productos
router.get('/productos', ProductoController.getAllProductos);

//Obtener productos por ID
router.get('/productos/:id', ProductoController.getProductoId);

//Actualizar un producto
router.put('/productos/:id', ProductoController.updateProducto);

//Eliminar un producto
router.delete('/productos/:id', ProductoController.deleteProducto);


module.exports = router;