/*El enrutador nos sirve para movernos de pagina en pagina
de nuestro proyecto*/
const express = require('express')
const router = express.Router()
const conexion = require ('./database/db')

//vinculos a pagina "contacto"
router.get('/contacto',(req,res)=>{
    res.send("contacto")
})

//vinculo a la pagina raiz
router.get('/',(req,res)=>{
        
    //CONSULTA A LA BASE DE DATOS
    conexion.query('select * from "datosDB" ORDER BY "ID"',(error,results)=>{
        if(error){
            throw error;
        } else{            
            res.render('index.ejs',{results:results.rows})
        }
    })
})

//ruta para crear registros

router.get('/create',(req,res)=>{
    res.render('create')
})

//ruta para editar los registros
router.get('/edit/:id',(req,res)=>{
    const id=req.params.id
    conexion.query(`select * from "datosDB" where "ID"=${id}`,(error,results)=>{
        if(error){
            throw error;
        } else{                
            res.render('edit',{user:results.rows})
        }
    })
})

//ruta para elimininar los registros
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id
    conexion.query(`DELETE FROM "datosDB" WHERE "ID"=${id}`,(error,results)=>{
        if(error){
            throw error;
        } else{                
            res.redirect('/')
        }
    })
})

//importamos los metodos del CRUD
const crud = require ('./controllers/crud')
router.post('/save', crud.save)
router.post('/update',crud.update)
router.post('/delete',crud.delete)

//exportamos el router para usarlo en app.js
module.exports=router