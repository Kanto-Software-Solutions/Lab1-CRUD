const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
<<<<<<< HEAD
const mysql =require("mysql2");
const taskController = require('./controllers/taskController.js');
=======
const taskController = require('./controllers/taskController.js');  // Borrar
const crud = require('./controllers/crud.js');
>>>>>>> 269aa899e8d489fbbf8b7d4f55726ddf0acdca64

//Configuraciones
app.set('port', process.env.PORT || 3003); //Puerto del servidor por defecto def por el SO
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//Conexion con el servidor
app.listen(app.get('port'),()=>{
	console.log('Server on port http://localhost:3003', app.get('port'));
});

//Conexion bd
const conexion=mysql.createConnection( {
    host: 'localhost',
    user: 'webuser',
    password: '1234',
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

//Middlewares
app.use(morgan('dev'));
app.use(express.json());


module.exports = conexion; //Exportar para CRUD

app.use(express.urlencoded({extended:false}));




//Archivos estaticos
app.use(express.static(__dirname + '/public'));


//Rutas
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



