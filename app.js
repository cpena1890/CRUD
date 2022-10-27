const { json } = require('express')
const express = require ('express')
const app = express()

//1-definimos el motor de plantillas
app.set('view engine', 'ejs')

// este metodo es para que funcione el guardar del /create
app.use(express.urlencoded({extended:false}))
app.use(express(json))

//2-llamamos al enrutador
app.use('/',require('./router'))

//levantamos el servidor express
app.listen(5000,()=>{
    console.log("SERVER corriendo en http://localhost:5000")
})


