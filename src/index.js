const express = require('express');
const morgan = require('morgan');
const path = require('path');
const taskController = require('./controllers/taskController.js');

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

module.exports = conexion; //Exportar para CRUD

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
app.get('/departamento1', (req, res) => {
    res.render('departamento1');
});
app.get('/departamento2', (req, res) => {
    res.render('departamento2');
});
app.get('/departamento3', (req, res) => {
    res.render('departamento3');
});
app.get('/municipio', (req, res) => {
    res.render('municipio');
});
app.get('/municipio1', (req, res) => {
    res.render('municipio1');
});
app.get('/municipio2', (req, res) => {
    res.render('municipio2');
});
app.get('/municipio3', (req, res) => {
    res.render('municipio3');
});
app.get('/persona', (req, res) => {
    res.render('persona');
});
app.get('/persona1', (req, res) => {
    res.render('persona1');
});
app.get('/persona2', (req, res) => {
    res.render('persona2');
});
app.get('/persona3', (req, res) => {
    res.render('persona3');
});
app.get('/propietario', (req, res) => {
    res.render('propietario');
});
app.get('/propietario1', (req, res) => {
    res.render('propietario1');
});
app.get('/propietario2', (req, res) => {
    res.render('propietario2');
});
app.get('/propietario3', (req, res) => {
    res.render('propietario3');
});
app.get('/vivienda', (req, res) => {
    res.render('vivienda');
});
app.get('/vivienda1', (req, res) => {
    res.render('vivienda1');
});
app.get('/vivienda2', (req, res) => {
    res.render('vivienda2');
});
app.get('/vivienda3', (req, res) => {
    res.render('vivienda3');
});
app.get('/taskController', (req, res) => {
    res.render('taskController');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.post('/departamento/add', taskController.save);
app.post('/municipio/add', taskController.save);
app.post('/persona/add', taskController.save);
app.post('/propietario/add', taskController.save);
app.post('/vivienda/add', taskController.save);



