const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/departamento', (req, res) => {
    res.render('departamento');
});
router.get('/departamento1', (req, res) => {
    res.render('departamento1');
});
router.get('/departamento2', (req, res) => {
    res.render('departamento2');
});
router.get('/departamento3', (req, res) => {
    res.render('departamento3');
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
router.get('/municipio3', (req, res) => {
    res.render('municipio3');
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
router.get('/persona3', (req, res) => {
    res.render('persona3');
});
router.get('/propietario', (req, res) => {
    res.render('propietario');
});
router.get('/propietario1', (req, res) => {
    res.render('propietario1');
});
router.get('/propietario2', (req, res) => {
    res.render('propietario2');
});
router.get('/propietario3', (req, res) => {
    res.render('propietario3');
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
router.get('/vivienda3', (req, res) => {
    res.render('vivienda3');
});
router.get('/taskController', (req, res) => {
    res.render('taskController');
});
router.get('/index', (req, res) => {
    res.render('index');
});
