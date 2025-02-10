1.0 Realizado con Mongoose
# API de Gestion de Inventario

## 📂 Estructura del Proyecto

/src
│── config/
│   └── db.js          
│── controllers/
│   └── ProductoController.js
│   └── PersonalController.js   
│   └── AlmacenController.js    
│   └── MovimientoController.js 
│── models/
│   └── Producto.js           
│   └── Personal.js          
│   └── Almacen.js            
│   └── Movimiento.js         
│── routers/
│   └── ProductoRoutes.js    
│   └── PersonalRoutes.js    
│   └── AlmacenRoutes.js    
│   └── MovimientoRoutes.js 
│── server.js                
│── .env                     
│── .gitignore               
│── package-lock.json        
│── package.json             


## ⚙️ Configuración del Entorno

1. MONGO_URI: URI de la base de datos MongoDB.
    env
   MONGO_URI=mongodb://127.0.0.1:27017/inventarioDB
   PORT=3000




## 🔑 Endpoints Actuales

### Producto

#### 1️⃣ Crear un Producto

POST /api/productos

{
  "nombre": "Laptop HP",
  "descripcion": "Procesador core i5 y 8 de RAM",
  "precio": 100,
  "cantidad": 10
}


##### 2️⃣ Obtener Todos los Productos

  GET /api/productos

#### 3️⃣ Obtener un Producto por ID

  GET /api/productos/:id

#### 4️⃣ Actualizar un Producto

PUT /api/productos/:id

{
  "nombre": "Producto Actualizado"
}

#### 5️⃣ Eliminar un Producto

DELETE /api/productos/:id


### Personal

#### 1️⃣ Crear un Personal

 POST /api/personal

{
  "Nombre": "Jahaziel Jeffrey Navarro Villatoro",
  "Telefono": "800 638 3682",
  "Rol": "Despachador",
  "Dirección": "Av Morelos 838",
  "Correo": "Jahaziel.Navarro@pchconnect.com"
}


#### 2️⃣ Obtener Todos los Personal

GET /api/personal

#### 3️⃣ Obtener un Personal por ID

GET /api/personal/:id

#### 4️⃣ Actualizar un Personal (utilizando ID)

PUT /api/personal/:id

{
  "Rol": "Jefe de Almacén",
}

#### 5️⃣ Eliminar un Personal

DELETE /api/personal/:id


### Almacenes

#### 1️⃣ Crear un Almacen

POST /api/almacenes

{
  "nombre": "Almacén Central",
  "ubicacion": {
    "ciudad": "Mercado de la Tecnológica",
    "pais": "México"
  }
}


#### 2️⃣ Obtener Todos los Almacenes

GET /api/almacenes

#### 3️⃣ Obtener un Almacén por ID

GET /api/almacenes/:id

#### 4️⃣ Actualizar un Almacén

PUT /api/almacenes/:id

{
  "ubicacion": {
    "ciudad": "Zona Sur",
  }
}

#### 5️⃣ Eliminar un Almacén

DELETE /api/almacenes/:id


### Movimiento de Inventario

#### 1️⃣ Registrar un Movimiento de Inventario

POST /api/movimientos

{
  "tipo": "entrada",
  "cantidad": 10,
  "fecha": "2024-02-03T12:00:00Z",
  "notas": "Reabastecimiento mensual",
  "personal_responsable": "Jahaziel Jeffrey Navarro Villatoro"
}

#### 2️⃣ Obtener Todos los Movimientos de Inventario

GET /api/movimientos

#### 3️⃣ Obtener un Movimiento de Inventario por ID

GET /api/movimientos/:id

#### 4️⃣ Actualizar un Movimiento de Inventario

PUT /api/movimientos/:id

{
  "tipo": "salida",
  "cantidad": 5,
  "fecha": "2024-02-10T12:00:00Z",
  "notas": "Devolución de productos",
}

#### 5️⃣ Eliminar un Movimiento de Inventario

DELETE /api/movimientos/:id

