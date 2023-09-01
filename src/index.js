const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const mysql =require("mysql2");

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




app.post('/departamento/add', taskController.save);
app.post('/municipio/add', taskController.save);
app.post('/persona/add', taskController.save);
app.post('/propietario/add', taskController.save);
app.post('/vivienda/add', taskController.save);



