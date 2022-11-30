const express = require('express')

const app = express()

const personas = []

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')

// get

app.get('/', (req, res) => {
    res.render('inicio', {productos})
    res.redirect('/productos')
})

// post

app.post('/productos', (req, res) => {
    personas.push(req.body)
    res.redirect('/')
})

app.listen(8080)