const conexion = require('../database/db')
const { use } = require('../router')

//procedimiento para guardar registros
exports.save = (req,res)=>{
    const user = req.body.user
    const rol = req.body.rol
    conexion.query(`insert into "datosDB" ("user","rol") values ('${user}','${rol}')`,(error,results)=>{
        if(error){
            console.log(error)
        } else{
            res.redirect('/')
        }
    })
}

//procedimiento para actualizar registros
exports.update = (req,res)=>{
    const id = req.body.id
    const user = req.body.user
    const rol = req.body.rol

    conexion.query(`UPDATE "datosDB" SET "user"='${user}',rol='${rol}' where "ID"=${id}`, (error,results)=>{
        if(error){
            console.log(error)
        } else{
            res.redirect('/')
        }
    })
}

//procedimiento para borrar registros
exports.delete = (req,res)=>{
    const id = req.body.id
    conexion.query(`DELETE FROM "datosDB" WHERE "ID"=${id}`,(error,results)=>{
        if(error){
            throw error;
        } else{                
            res.redirect('/')
        }

    })
}