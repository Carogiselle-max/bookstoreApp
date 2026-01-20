const express = require('express');
require('dotenv').config(); 
const morgan = require('morgan');

/* Importar las rutas */
const productRoutes = require('./routes/productRoutes');

const app = express();

/* MIDDLEWARES   */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ROUTES */
app.use("/api/v1/products", productRoutes);

/* PUERTO */
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
} );