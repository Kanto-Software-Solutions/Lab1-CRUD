const express = require('express');				//Usa express
const router = express.Router();				//Var router
const conexion = require('./controllers/db');
const crud = require('./controllers/crud');	

module.exports = router;

router.get('/departamento', (req, res) => {
	conexion.query('select * from departamento',(error,results)=>{
		if(error){
			throw error;
		}else{
			res.send(results);
		}
	})
});
router.get('/departamento1', (req, res) => {
	res.render('departamento1');
});
router.get('/departamento2', (req, res) => {
	res.render('departamento2');
});
router.get('/departamentos', (req, res) => {
	crud.listAllDepartamentos(req,res);
});
router.get('/municipio', (req, res) => {
	res.render('municipio');
});
router.get('/municipio1', (req, res) => {
	res.render('municipio1');
});
router.get('/municipio2', (req, res) => {
	res.render('municipio2');
});
router.get('/municipios', (req, res) => {
	crud.listAllMunicipios(req,res);
});
router.get('/persona', (req, res) => {
	res.render('persona');
});
router.get('/persona1', (req, res) => {
	res.render('persona1');
});
router.get('/persona2', (req, res) => {
	res.render('persona2');
});
router.get('/personas', (req, res) => {
	crud.listAllPersonas(req,res);
});

router.get('/crear-propietario', (req, res) => {
	res.render('crear-propietario');
});

router.post('/createPropietario', crud.createPropietario);

router.get('/propietario1', (req, res) => {
	res.render('propietario1');
});
router.get('/propietario2', (req, res) => {
	res.render('propietario2');
});
router.get('/propietarios', (req, res) => {
	crud.listAllPropietarios(req, res); //SIUUUUUUUUUUUU
});
router.get('/vivienda', (req, res) => {
	res.render('vivienda');
});
router.get('/vivienda1', (req, res) => {
	res.render('vivienda1');
});
router.get('/vivienda2', (req, res) => {
	res.render('vivienda2');
});
router.get('/viviendas', (req, res) => {
	crud.listAllViviendas(req,res);
});
