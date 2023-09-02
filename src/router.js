const express = require('express');				//Usa express
const router = express.Router();				//Var router
const conexion = require('./controllers/db');
const crud = require('./controllers/crud');	

module.exports = router;

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

router.get('/update-departamento/:id', (req, res) => {
	crud.listDepartamento(req,res);
});

router.post('/updateDepartamento', crud.updateDepartamento);

router.get('/update-municipio/:id', (req, res) => {
	crud.listMunicipio(req,res);
});

router.post('/updateMunicipio', crud.updateMunicipio);

router.get('/update-vivienda/:id', (req, res) => {
	crud.listVivienda(req,res);
});

router.post('/updateVivienda', crud.updateVivienda);

router.get('/update-persona/:id', (req, res) => {
	crud.listPersona(req,res);
});

router.post('/updatePersona', crud.updatePersona);

router.get('/update-propietario/:id', (req, res) => {
	crud.listPropietario(req,res);
});

router.post('/updatePropietario', crud.updatePropietario);

//------------------------------------- DELETE ------------------------------------

router.get('/borrar-departamento/:id', (req, res) => {
	crud.deleteDepartamentoRender(req,res);
});

router.post('/deleteDepartamento', crud.deleteDepartamento);

router.get('/borrar-municipio/:id', (req, res) => {
	crud.deleteMunicipioRender(req, res);
});

router.post('/deleteMunicipio', crud.deleteMunicipio)

router.get('/borrar-vivienda/:id', (req, res) => {
	crud.deleteViviendaRender(req, res);
});

router.post('/deleteVivienda', crud.deleteVivienda)

router.get('/borrar-persona/:id', (req, res) => {
	crud.deletePersonaRender(req,res);
});

router.post('/deletePersona', crud.deletePersona)

router.get('/borrar-propietario/:id', (req, res) => {
	crud.deletePropietarioRender(req, res);
});

router.post('/deletePropietario', crud.deletePropietario)