const express = require('express');
const morgan = require('morgan');
const path = require('path');
//require("dotenv").config();
const mysql =require("mysql2");
const myConnection=require("express-myconnection")

const app = express();
//importando rutas
const customerRoutes =require('./routes/tasks');
//Configuraciones
app.set('port', process.env.PORT || 3003); //Puerto del servidor por defecto def por el SO
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Conexion bd
const conexion=mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'lab1'
}, 'single');
conexion.connect((error) =>{
	if(error){
		console.error('No se pudo conectar a la BD: '+error);
		return
	}
	console.log('Conectado a la DB');
});
app.use(express.urlencoded({extended:false}));
//Rutas

//Archivos estaticos
app.use(express.static(__dirname + '/public'));



//¿Está entrando al server?
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});
app.get('/departamento', (req, res) => {
    res.render('departamento');
});
app.get('/municipio', (req, res) => {
    res.render('municipio');
});
app.get('/persona', (req, res) => {
    res.render('persona');
});
app.get('/propietario', (req, res) => {
    res.render('propietario');
});
app.get('/vivienda', (req, res) => {
    res.render('vivienda');
});
app.get('/taskController', (req, res) => {
    res.render('taskController');
});

app.get('/index', (req, res) => {
    res.render('index');
});