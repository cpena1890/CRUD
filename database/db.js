//en este archivo seteamos la conexion a la DB

const {Pool} = require('pg')

//datos de conexion a la DB
const pool = new Pool({
  user: 'carlos' ,
  host: 'localhost' ,
  database: 'pruebadb',
  password: '1890',
  port: 5432,
})

//conexion a la base de datos
pool.connect ((error)=>{
    if(error){
        console.error("El error de conexion es: " + error)
        return
    }
    console.log("CONECTADO A LA BASE DE DATOS")
})

//exportamos el modulo para poder utilizarlo en app.js
module.exports = pool
