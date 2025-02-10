require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productoRoutes = require('./routes/ProductoRoutes');
const proveedorRoutes = require('./routes/ProveedorRoutes'); 
const categoriaRoutes = require('./routes/CategoriaRoutes');
const personalRoutes = require('./routes/PersonalRoutes');
const almacenesRoutes = require('./routes/AlmacenesRoutes');
const movimientoDeInventarioRoutes = require('./routes/Movimiento_de_InventarioRoutes');

const app = express();

//Middleware 
app.use(cors());
app.use(express.json());

//Conexión a la base de datos
connectDB();

//Rutas
app.use('/api', productoRoutes);
app.use('/api', proveedorRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', personalRoutes);
app.use('/api', almacenesRoutes);
app.use('/api', movimientoDeInventarioRoutes);

//Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});