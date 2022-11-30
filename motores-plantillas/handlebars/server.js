const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', handlebars.engine())

app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const data = []

    res.render('datos', data)

})

app.post('/productos', (req, res) => {
    personas.push(req.body)
    res.render('datos', data)
})

app.listen(8080)