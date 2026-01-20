const express = require('express');

const router = express.Router();


/* Ruta que me lista todos los productos */
router.get("/", (req, res) => {
    res.send("Listado de todos los libros de nuestro catalogo")
});


/* Ruta que me lista un solo producto */
router.get("/libro",  (req, res) => { 
    res.send("Aqui se mostrara un solo libro")})

router.post("/newBook", (req, res) => {
    const {title, price} = req.body;
    res.send(`el nuevo libro se llama: ${title} || su precio es de: ${price}`)
})

module.exports = router;