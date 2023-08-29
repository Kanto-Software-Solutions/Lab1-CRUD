const { error } = require('jquery');
// const conexion = require('../database/db'); Ya no existe el archivo
const conexion = require('../index');
const { query } = require('express');

//TODO: Actualizar sentencias, cambiar nombres de funciones por más representativos. Reorganizar funciones
/*CHANGELOG: 
*       - Creé La Primera Query de Ejemplo que es un Create Persona
*		- Reorganizé el Código para que siga el orden de CRUD
*		- Siguiendo lo anterior, comenté una parte del código para modificarlo despues
*		- Actualicé la constante de conexión
*		- Creados Scripts de Create (Persona, Departamento)
*/

//CREATE 
// Query de Ejemplo
exports.createPerson = (req,res) =>{
	const nombre = req.params.nombre;
	const apellido = req.params.apellido;
	const edad = req.params.edad;
	const telefono = req.params.telefono;
	const departamento = req.params.departamento;
	conexion.query("INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ( '" + nombre + "' , '" + apellido + "' , '" + edad + "' , '" + telefono + "' , '" + departamento + "')", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se creó la persona: " + nombre + " " + apellido);
			return // Do Something (Se retorna el Render o un Objeto o JSON???)
		}
	});
}

exports.createDepartamento = (req,res) => {
	const id_departamento = req.body.id //body o params?
	const nombreDepartamento = req.body.nombreDepartamento;

	let query = ('INSERT INTO departamento (id, nombreDepartamento) VALUES ( "' + id_departamento +  '", "' + nombreDepartamento + '")');
	conexion.query(query, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se creo el departamento ' + nombreDepartamento);
			return  // Do Something (Se retorna el Render o un Objeto o JSON???)
		}
	});
}

/*
exports.createp  = (req,res) =>{
	var queries = [
		'select p.id as p_id, p.nombre, p.apellido from persona p',
		'select v.id as v_id, v.direccion from vivienda v order by direccion asc'
	] //Cambiar Selects por Inserts (?)
	conexion.query(queries.join(';'), (error,results,fields)=>{
		if(error){
			console.log(error);
		}else{
			res.render('create_persona',{results:results});
		}

	});
}
exports.createv  = (req,res) =>{
	var queries = [
		'select p.id as p_id, p.nombre, p.apellido from persona p',
		'SELECT id, nombre FROM taller_0.municipio order by id;'
	]
	conexion.query(queries.join(';'), (error,results,fields)=>{
		if(error){
			console.log(error);
		}else{
			res.render('create_vivienda',{
				results:results});
		}

	});
}
exports.createm  = (req,res) =>{
	conexion.query('select p.id as p_id, p.nombre, p.apellido from persona p left join municipio m on p.id = m.gobernador where m.gobernador is null', (error,results,fields)=>{
		if(error){
			console.log(error);
		}else{
			res.render('create_municipio',{
				results:results});
		}
	});
}
exports.createpo = (req,res) =>{
	var queries = [
		'select p.id as p_id, p.nombre, p.apellido from persona p',
		'select v.id as v_id, v.direccion from vivienda v order by direccion asc'
	]
	conexion.query(queries.join(';'), (error,results,fields)=>{
		if(error){
			console.log(error);
		}else{
			res.render('create_propietario',{
				results:results});
		}
	});
}
*/

//READ-Update (?)
exports.select_up = (req,res)=>{
	const id = req.params.id;
	var queries = [
		'select p.id as p_id, p.nombre, p.apellido from persona p',
		'select v.id as v_id, v.direccion from vivienda v order by direccion asc',
		'select * from persona where id = '+ id
	]
	conexion.query(queries.join(';'), (error,results)=>{
		if(error){
			console.log(error);
		}else{
			res.render('edit_persona',{results:results});
		}
	}		
	)
}
exports.select_um = (req,res) => {
	const id = req.params.id;
	var queries = [
		'select p.id as p_id, p.nombre, p.apellido from persona p left join municipio m on p.id = m.gobernador where m.gobernador is null or m.gobernador = '+id,
		'select * from municipio where id= ' + id,
	]
	conexion.query(queries.join(';'),(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('edit_municipio', {results:results});
		}
	})
}
exports.select_uv  = (req,res) => {
	const id = req.params.id;
	var queries = [
		'SELECT id, nombre FROM municipio order by id',
		'select * from vivienda where id= ' + id

	]
	conexion.query(queries.join(';'), (error,results,fields)=>{
		if(error){
			console.log(error);
		}else{
			res.render('edit_vivienda',{results:results});
		}

	});
}
exports.select_upo = (req,res) => {
	const id = req.params.id;
	var queries = [
		'select p.id as p_id, p.nombre, p.apellido from persona p',
		'select v.id as v_id, v.direccion from vivienda v order by direccion asc',
		'select * from propietarios where id= ' + id

	]
	conexion.query(queries.join(';'),(error,results) => {
		if(error){
			throw error;
		}else{

			res.render('edit_propietario', {results:results});
		}
	})
}

//READ
exports.verp = (req,res) => {
	conexion.query('select p.id, p.nombre , p.apellido, p.edad, p.telefono, s.sexo, v.direccion, h.nombre as responsable_n from persona p, sexo s, vivienda v, persona h where p.sexo = s.id and p.vivienda = v.id and p.cabeza_hogar = h.id order by p.id asc',(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('ver_personas', {results:results});
		}
	})
}
exports.verv = (req,res) => {
	var query = "select * from viviendas_con_dueno union table viviendas_sin_dueno order by id"
	conexion.query(query,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('ver_viviendas', {results:results});
		}
	})
}
exports.verm = (req,res) => {
	conexion.query('select m.*, p.nombre as gobernador_n, p.apellido as gobernador_a from municipio m left join	persona p on m.gobernador = p.id;',(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('ver_municipios', {results:results});
		}
	})
}
exports.verpo = (req,res) => {
	conexion.query('select po.*, p.nombre, p.apellido, v.direccion from propietarios po, persona p, vivienda v where po.persona_id = p.id and po.vivienda_id = v.id order by po.id',(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('ver_propietarios', {results:results});
		}
	})
}

//UPDATE
exports.editp = (req,res)=> {
	const id 			= req.body.id;
	const nombre		= req.body.nombre;
	const apellido		= req.body.apellido;
	const edad			= req.body.edad;
	const sexo			= req.body.sexo;
	const telefono		= req.body.telefono;
	const vivienda		= req.body.vivienda;
	const cabeza_hogar	= req.body.cabeza_hogar;
	let query = ('update persona set nombre="'+nombre+'",apellido="'+apellido+'", edad= "'+edad+'", telefono = "'+telefono+'", sexo = "'+sexo+'", vivienda = "'+vivienda+'", cabeza_hogar = "'+cabeza_hogar+'" where id ='+id )
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se edito el usuario con ID: ' + id +' ap '+ nombre);
			res.redirect('ver_personas');
		}
	});
}
exports.editm = (req,res) => {
	const id 			= req.body.id;
	const nombre		= req.body.nombre;
	const area			= req.body.area;
	const presupuesto	= req.body.presupuesto;
	const gobernador	= req.body.gobernador;

	let query = ('update municipio set nombre="'+nombre+'", area ="'+area+'", presupuesto= "'+presupuesto+'", gobernador = "'+gobernador+'" where id = '+id)

	conexion.query(query, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se Actualizo el municipio ' + nombre +' ar '+ area+' pre ' + presupuesto +' gob ' + gobernador);
			res.redirect('ver_municipios');
		}
	});
}
exports.editv = (req,res) => {
	const id			= req.body.id;
	const direccion		= req.body.direccion;
	const capacidad		= req.body.capacidad;
	const niveles		= req.body.niveles;
	const ubicacion		= req.body.ubicacion;

	let query0 = ('update vivienda set direccion ="'+direccion+'", capacidad ="'+capacidad+'", niveles= "'+niveles+'", ubicacion = "'+ubicacion+'" where id = '+id)
	conexion.query(query0, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se edito la vivienda id: '+id+' dir ' + direccion +' ub '+ ubicacion);
			res.redirect('ver_viviendas');
		}
	});
}
exports.editpo = (req,res) => {
	const id			= req.body.id;
	const persona_id	= req.body.persona_id;
	const vivienda_id	= req.body.vivienda_id;
	
	let query0 = ('update propietarios set  persona_id ="'+persona_id+'", vivienda_id ="'+vivienda_id+'" where id = '+id)
	
	conexion.query(query0, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se edito el propietario ' + persona_id +' ar '+ vivienda_id);
			res.redirect('ver_propietarios');
		}
	});
}

//INSERT
exports.savev = (req,res) => {
	const direccion		= req.body.direccion;
	const capacidad		= req.body.capacidad;
	const niveles		= req.body.niveles;
	const ubicacion		= req.body.ubicacion;
	const persona_id 	= req.body.persona_id;

	let query0 = ('INSERT INTO vivienda (direccion,capacidad,niveles,ubicacion) VALUES ("'+direccion+'","'+capacidad+'","'+niveles+'","'+ubicacion+'");SELECT LAST_INSERT_ID() as id')
	conexion.query(query0, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			var string=JSON.stringify(results);
			var json =  JSON.parse(string);
			console.log('Se creo la vivienda ' + direccion +' ub '+ ubicacion);
			let query1 = ('INSERT INTO propietarios (persona_id,vivienda_id) VALUES ("'+persona_id+'","'+json[0].insertId+'")')
			conexion.query(query1, (error,results)=>{
				if(error){
					console.log(error);
				}else{
					console.log('Se creo el propietario ' + persona_id +' ar '+ json[0].insertId);
				}
			});
			res.redirect('ver_viviendas');
		}
	});
}
exports.savepo = (req,res) => {
	const persona_id		= req.body.persona_id;
	const vivienda_id		= req.body.vivienda_id;

	let query = ('INSERT INTO propietarios (persona_id,vivienda_id) VALUES ("'+persona_id+'","'+vivienda_id+'")')
	conexion.query(query, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se creo el propietario ' + persona_id +' ar '+ vivienda_id);
			res.redirect('ver_propietarios');
		}
	});
}
exports.savem = (req,res) => {
	const nombre		= req.body.nombre;
	const area			= req.body.area;
	const presupuesto	= req.body.presupuesto;
	const gobernador	= req.body.gobernador;

	let query = ('INSERT INTO municipio (nombre,area,presupuesto,gobernador) VALUES ("'+nombre+'","'+area+'","'+presupuesto+'","'+gobernador+'")')

	conexion.query(query, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se creo el municipio ' + nombre +' ar '+ area+' pre ' + presupuesto +' gob ' + gobernador);
			res.redirect('ver_municipios');
		}
	});
}

/* YA INCORPORADO ARRIBA
exports.savep = (req,res) => {
	const nombre		= req.body.nombre;
	const apellido		= req.body.apellido;
	const edad			= req.body.edad;
	const sexo			= req.body.sexo;
	const telefono		= req.body.telefono;
	const vivienda		= req.body.vivienda;
	const cabeza_hogar	= req.body.cabeza_hogar;
	
	let query = ('INSERT INTO persona (nombre,apellido,edad,telefono,sexo,vivienda,cabeza_hogar) VALUES ("'+nombre+'","'+apellido+'","'+edad+'","'+telefono+'","'+sexo+'","'+vivienda+'","'+cabeza_hogar+'")')
	conexion.query(query, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se creo el usuario ' + nombre +' ap '+ apellido +' ed ' + edad +' tel ' + telefono +' s ' + sexo +' v ' + vivienda+ ' ch ' + cabeza_hogar);
			res.redirect('ver_personas');
		}
	});
	
}
*/


//DELETE
exports.deletep = (req,res) => {
	const id =  req.params.id;
	conexion.query('delete from persona where id = '+ id , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino la persona con ID' + id);
			res.redirect('/ver_personas')
		}
	}
	)
}
exports.deletem = (req,res) => {
	const id =  req.params.id;
	conexion.query('delete from municipio where id = '+ id , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino el municipio con ID' + id);
			res.redirect('/ver_municipios')
		}
	}
	)
}
exports.deletepo = (req,res) => {
	const id =  req.params.id;
	conexion.query('delete from propietarios where id = '+ id , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino el propietario con ID' + id);
			res.redirect('/ver_propietarios')
		}
	}
	)
}
exports.deletev = (req,res) => {
	const id =  req.params.id;
	conexion.query('delete from vivienda where id = '+ id , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino la vivienda con ID' + id);
			res.redirect('/ver_viviendas')
		}
	}
	)
}