const express = require('express')
const { Router } = express

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mascotas = []
const personas = []

//crear routers

const routerMascotas = new Router ()

routerMascotas.get('/', (req,res) => {
    res.json(mascotas)
})

const routerPersonas = new Router ()

routerPersonas.get('/',(req,res) => {
    res.json(personas)
})

app.use('/mascotas',routerMascotas)
app.use('/personas',routerPersonas)


// para agregar

routerMascotas.post('/',(req,res) => {
    mascotas.push(req.body)
    res.json({ok:'ok'})
})



const server = app.listen(8080, () => {
    console.log('escuchando en el 8080')
})