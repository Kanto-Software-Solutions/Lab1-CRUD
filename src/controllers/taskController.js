const { error } = require('jquery');
const conexion =require('../index')
const { query } = require('express');
const controller ={};

controller.list=(req,res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM departamento',(err,departamentos)=>{
            if(err){
                res.json(err);
            }
            res.render('departamentos', {
                data: departamentos
            });
        });
    });
}
controller.save=(req,res)=>{
   console.log(req.body);
   res.send('works')
};
module.exports=controller;