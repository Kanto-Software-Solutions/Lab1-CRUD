const express = require('express');				//Usa express
const router = express.Router();				//Var router
const conexion = require('./controllers/db');
const crud = require('./controllers/crud');	

module.exports = router;

/*router.get('/departamento', (req, res) => {
	conexion.query('select * from departamento',(error,results)=>{
		if(error){
			throw error;
		}else{
			res.send(results);
		}
	})
});*/

// ----------------------------- CREAR --------------------------------

router.get('/crear-departamento', (req,res)=> {
	res.render('crear-departamento');
});

router.post('/createDepartamento', crud.createDepartamento);

router.get('/crear-municipio', (req, res) => {
	res.render('crear-municipio');
});

router.post('/createMunicipio', crud.createMunicipio);

router.get('/crear-vivienda', (req, res) => {
	res.render('crear-vivienda');
});

router.post('/createVivienda', crud.createVivienda);

router.get('/crear-persona', (req, res) => {
	res.render('crear-persona');
});

router.post('/createPersona', crud.createPersona);

router.get('/crear-propietario', (req, res) => {
	res.render('crear-propietario');
});

router.post('/createPropietario', crud.createPropietario);

// ---------------------------- LISTAR TODOS -------------------

router.get('/departamentos', (req, res) => {
	crud.listAllDepartamentos(req,res);
});

router.get('/municipios', (req, res) => {
	crud.listAllMunicipios(req,res);
});

router.get('/viviendas', (req, res) => {
	crud.listAllViviendas(req,res);
});

router.get('/personas', (req, res) => {
	crud.listAllPersonas(req,res);
});

router.get('/propietarios', (req, res) => {
	crud.listAllPropietarios(req, res); //SIUUUUUUUUUUUU
});

// ---------------------------- UPDATE ------------------------------

router.get('/update-departamento', (req, res) => {
	res.render('update-departamento');
});

router.get('/update-municipio', (req, res) => {
	res.render('update-municipio');
});

router.get('/update-vivienda', (req, res) => {
	res.render('update-vivienda');
});

router.get('/update-persona', (req, res) => {
	res.render('update-persona');
});

router.get('/update-propietario', (req, res) => {
	res.render('update-propietario');
});

//------------------------------------- DELETE ------------------------------------

router.get('/borrar-departamento', (req, res) => {
	res.render('borrar-departamento');
});

router.delete('/borrar-departamento/:id', crud.deleteDepartamento)

router.get('/borrar-municipio', (req, res) => {
	res.render('borrar-municipio');
});

router.delete('/borrar-municipio/:id', crud.deleteDepartamento)

router.get('/borrar-vivienda', (req, res) => {
	res.render('borrar-vivienda');
});

router.delete('/borrar-vivienda/:id', crud.deleteDepartamento)

router.get('/borrar-persona', (req, res) => {
	res.render('borrar-persona');
});

router.delete('/borrar-persona/:id', crud.deleteDepartamento)

router.get('/borrar-propietario', (req, res) => {
	res.render('borrar-propietario');
});

router.delete('/borrar-propietario/:id', crud.deleteDepartamento)