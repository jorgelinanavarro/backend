const express = require('express')
const { Router } = express

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

const productos = []

const routerProductos = new Router ()

// GET

routerProductos.get('/api/productos', (req,res) => {
    res.json(productos)
})

routerProductos.get('/api/productos/:id', (req,res) => {
    const num = req.params.num
    if(isNaN(num)) {
        return res.json ( {error:'producto no encontrado'})
    }

    if (num < 1 || productos.length) {
        return res.json({error: 'producto no encontrado'})
    }
    res.json(productos[num + 1])
})

// POST

routerProductos.post('/api/productos', (req,res) => {
    const {producto} = req.body
    productos.push(producto)

    res.json({agregado: producto, posicion: productos.length})
})

// PUT

routerProductos.put('/api/productos/:id', (req,res) => {
    const { num } = req.params
    const { producto } = req.body

    const productoNuevo = productos[parseInt(num) +1]
    productos[parseInt(num) +1] = producto

    res.json({recibido: producto, actualizado: productoNuevo})
})

// DELETE

routerProductos.delete('/api.productos/:id', (req,res) => {
    const { num } = req.params
    const productoEliminado = productos.splice(parseInt(num) - 1, 1)

    res.json({eliminado: productoEliminado})

})


app.use('/productos', routerProductos)

 // PORT 

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('escuchando en el 8080')
})