// const conexion = require('../database/db'); Ya no existe el archivo
const conexion = require('./db');
const { query } = require('express');

//TODO: Actualizar sentencias, cambiar nombres de funciones por más representativos.
/* CHANGELOG: 
*       - Creé La Primera Query de Ejemplo que es un Create Persona
*		- Reorganizé el Código para que siga el orden de CRUD
*		- Siguiendo lo anterior, comenté una parte del código para modificarlo despues
*		- Actualicé la constante de conexión
*		- Creados Scripts de Create (Persona, Departamento, Municipio, Vivienda y Propietario), Update y Delete (Ya hecho)
*		- Retornos funciones a Front
*/

// ------------------------------------- CREATE ------------------------------------------------------------------

exports.createPersona = (req,res) =>{
	const id = req.body.id;
	const nombre = req.body.nombre;
	const apellido = req.body.apellido;
	const sexo = req.body.sexo;
	const edad = req.body.edad;
	const telefono = req.body.telefono;
	const vivienda = req.body.vivienda_id;
	const responsable = req.body.responsable;
	conexion.query("INSERT INTO Persona (id,nombre, apellido, sexo, edad, telefono, vivienda, responsable) VALUES ( '" + id + "' ,'" + nombre + "' , '" + apellido + "' ,'" + sexo + "' , '" + edad + "' , '" + telefono + "' , '" + vivienda + "', '" + responsable + "')", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se creó la persona: " + nombre + " " + apellido);
			res.redirect('/personas');
		}
	});
}

exports.createDepartamento = (req,res) => {

	const nombreDepartamento = req.body.nombreDepartamento;

	let query = ('INSERT INTO departamento (nombreDepartamento) VALUES ("' + nombreDepartamento + '")');


	conexion.query(query, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se creo el departamento ' + nombreDepartamento);
			res.redirect('/departamentos');
		}
	});
}

exports.createMunicipio = (req,res) => {
	const nombre		= req.body.nombre;
	const area			= req.body.area;
	const presupuesto	= req.body.presupuesto;
	const gobernador	= req.body.gobernador;

	const departamento = req.body.departamento;

	let query = ('INSERT INTO municipio (nombre,area,presupuesto,gobernador,departamento) VALUES ("'+ nombre +'", '+ area +' , '+ presupuesto +' , '+ gobernador + ', '+ departamento + ')'); //Sin comillas para que concuerde con Script de Diana

	conexion.query(query, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se creo el municipio ' + nombre +' ar '+ area+' pre ' + presupuesto +' gob ' + gobernador);
			res.redirect('/municipios');
		}
	});
}

exports.createVivienda = (req, res) => {
	const direccion		= req.body.direccion;
	const capacidad		= req.body.capacidad;
	const niveles		= req.body.niveles;
	const municipio		= req.body.municipio;

	const dueño 		= req.body.dueño;

	let query0 = ('INSERT INTO vivienda (direccion,capacidad,niveles,municipio, dueño) VALUES ("'+ direccion + '" , ' + capacidad + ' , ' + niveles + ' , ' + municipio+', ' + dueño+')'); //Sin comillas para que concuerde con Script de Diana

	conexion.query(query0, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			var string=JSON.stringify(results);
			var json =  JSON.parse(string);
			console.log('Se creo la vivienda ' + direccion +' municipio '+ municipio);
			/*let query1 = ('INSERT INTO propietarios (Persona_id , Vivienda_id , Departamento_id) VALUES (' + persona_id + ' , '+ json[0].insertId + ' , ' + departamento_id + ')');
			conexion.query(query1, (error,results)=>{
				if(error){
					console.log(error);
				}else{
					console.log('Se creó el propietario ' + persona_id +' ar '+ json[0].insertId);
				}
			});*/
			res.redirect('/viviendas');
		}
	});
}

exports.createPropietario = (req,res) => {
	const persona_id		= req.body.persona_id;
	const vivienda_id		= req.body.vivienda_id;


	let query = ('INSERT INTO Persona_has_vivienda (Persona_id , Vivienda_id) VALUES (' + persona_id + ' , '+ vivienda_id + ')');

	conexion.query(query, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se creo el propietario ' + persona_id +' ar '+ vivienda_id);
			res.redirect('/propietarios');
		}
	});
}

//----------------------- LISTAR SOLO 1 ENTRADA PARA REALIZAR UPDATE ----------------------
exports.listPersona = (req,res)=>{
	const id = req.params.id;
	conexion.query('select * from persona where id =?', [id] ,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('update-persona', {persona:results[0]});
		}
	})
}

exports.listMunicipio = (req,res) => {
	const id = req.params.id;
	conexion.query('select * from municipio where id=?', [id] ,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('update-municipio', {municipio:results[0]});
		}
	})
}
exports.listVivienda  = (req,res) => {
	const id = req.params.id;
	conexion.query('select * from vivienda where id=?', [id] ,(error,results) => {
		if(error){
			console.log(error);
		}else{
			res.render('update-vivienda',{vivienda:results[0]});
		}

	});
}
exports.listPropietario = (req,res) => {
	const id = req.params.id;
	conexion.query('select * from persona_has_vivienda where vivienda_id=?', [id] ,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('update-propietario', {propietario:results[0]});
		}
	})
}

exports.listDepartamento = (req,res) => {
	const id = req.params.id;
	conexion.query('select * from departamento where id =?', [id] ,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('update-departamento', {departamento:results[0]});
		}
	})
}

//------------------------------------ READ --------------------------------------------
exports.listAllPersonas = (req,res) => {
	conexion.query('select p.id, p.nombre , p.apellido, p.sexo, p.edad, p.telefono, v.direccion as vivienda, p.responsable from persona p, vivienda v where p.vivienda = v.id order by p.id asc',(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('personas', {results:results});
		}
	});
}

exports.listAllViviendas = (req,res) => {
	var query = "select v.id, v.direccion, v.capacidad, v.niveles, m.nombre as municipio, p.nombre as dueño from vivienda v, municipio m, persona p where m.id = v.municipio and p.id = v.dueño order by id";
	conexion.query(query,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('viviendas', {results:results});
		}
	});
}

exports.listAllMunicipios = (req,res) => {
	conexion.query('select m.id, m.nombre, m.area, m.presupuesto, p.nombre as gobernador_n, p.apellido as gobernador_a, d.nombreDepartamento as departamento from municipio m left join persona p on m.gobernador = p.id, departamento d where m.departamento = d.id;',(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('municipios', {results:results});
		}
	});
}

exports.listAllPropietarios = (req,res) => {
	conexion.query('select po.*, p.nombre, p.apellido, v.direccion from persona_has_vivienda po, persona p, vivienda v where po.persona_id = p.id and po.vivienda_id = v.id',(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('propietarios', {results:results});
		}
	});
}

exports.listAllDepartamentos = (req, res) => {
	conexion.query('SELECT * FROM Departamento', (error, results) => {
		if(error){
			throw error;
		}else{
			res.render('departamentos', {results:results});
		}
	});
}

// ------------------------------------------ UPDATE -----------------------------------------------------
exports.updatePersona = (req,res)=> {
	const id 			= req.body.id;
	const nombre		= req.body.nombre;
	const apellido		= req.body.apellido;
	const sexo			= req.body.sexo;
	const edad			= req.body.edad;
	const telefono		= req.body.telefono;
	const vivienda		= req.body.vivienda;
	const cabeza_hogar	= req.body.cabeza_hogar;

	let query = ('update persona set id =' + id[0] + ' , nombre="'+nombre+'",apellido="'+apellido+ '", sexo = '+ sexo +' , edad= '+edad+', telefono = '+telefono+', vivienda = '+vivienda+', responsable = '+cabeza_hogar +' where id ='+id[0] );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se edito el usuario con ID: ' + id +' ap '+ nombre);
			res.redirect('personas'); 
		}
	});
}

exports.updateDepartamento = (req,res) => {
	const id					= req.body.id;
	const nombreDepartamento	= req.body.nombreDepartamento;

	let query0 = ('update departamento set nombreDepartamento = "' + nombreDepartamento + '" where id = ' + id[0]);
	
	conexion.query(query0, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se edito el departamento: ' + nombreDepartamento);
			res.redirect('departamentos'); 
		}
	});
}

exports.updateMunicipio = (req,res) => {
	const id 			= req.body.id;
	const nombre		= req.body.nombre;
	const area			= req.body.area;
	const presupuesto	= req.body.presupuesto;
	const gobernador	= req.body.gobernador;
	const departamento  = req.body.departamento;

	let query = ('update municipio set nombre="'+nombre+'", area ='+area+', presupuesto= '+presupuesto+', gobernador = '+gobernador+', departamento = ' + departamento + ' where id = '+id);

	conexion.query(query, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se Actualizo el municipio ' + nombre +' ar '+ area+' pre ' + presupuesto +' gob ' + gobernador);
			res.redirect('municipios'); 
		}
	});
}

exports.updateVivienda = (req,res) => {
	const id			= req.body.id;
	const direccion		= req.body.direccion;
	const capacidad		= req.body.capacidad;
	const niveles		= req.body.niveles;
	const municipio		= req.body.municipio;
	const dueño 		= req.body.dueño;

	let query0 = ('update vivienda set direccion ="'+direccion+'", capacidad ='+capacidad+', niveles= '+niveles+', municipio = '+ municipio +', dueño = ' + dueño +  ' where id = '+id);
	//Sin comillas para que concuerde con Script de Diana

	conexion.query(query0, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se edito la vivienda id: '+id+' dir ' + direccion +' ub '+ municipio);
			res.redirect('viviendas');
		}
	});
}

exports.updatePropietario = (req,res) => {
	const persona_id	= req.body.persona_id;
	const vivienda_id	= req.body.vivienda_id;
	
	let query0 = ('update persona_has_vivienda set  persona_id =' + persona_id + ', vivienda_id =' + vivienda_id[1] + ' where vivienda_id = ' + vivienda_id[1]);
	
	conexion.query(query0, (error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Se edito el propietario ' + persona_id +' ar '+ vivienda_id);
			res.redirect('propietarios');
		}
	});
}

// ---------------------------------------- DELETE --------------------------------------------
exports.deletePersonaRender = (req,res) => { //Para devolver el id al formulario (renderer)
	const id = req.params.id;
	conexion.query('select * from vivienda where id =?', [id] ,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('borrar-persona', {persona:results[0]});
		}
	})
}

exports.deletePersona = (req,res) => {
	const id =  req.body.id;
	conexion.query('delete from persona where id = '+ id , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino la persona con ID' + id);
			res.redirect('/personas')
		}
	});
}

exports.deleteMunicipioRender = (req,res) => { //Para devolver el id al formulario (renderer)
	const id = req.params.id;
	conexion.query('select * from municipio where id =?', [id] ,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('borrar-municipio', {vivienda:results[0]});
		}
	})
}

exports.deleteMunicipio = (req,res) => {
	const id =  req.body.id;
	conexion.query('delete from municipio where id = '+ id , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino el municipio con ID' + id);
			res.redirect('/municipios')
		}
	});
}

exports.deleteViviendaRender = (req,res) => { //Para devolver el id al formulario (renderer)
	const id = req.params.id;
	conexion.query('select * from vivienda where id =?', [id] ,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('borrar-vivienda', {vivienda:results[0]});
		}
	})
}

exports.deletePropietario = (req,res) => {
	const id =  req.body.id;
	conexion.query('delete from propietario where vivienda_id = '+ id , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino la vivienda del propietario con ID' + id);
			res.redirect('/propietarios')
		}
	});
}

exports.deleteViviendaRender = (req,res) => { //Para devolver el id al formulario (renderer)
	const id = req.params.id;
	conexion.query('select * from vivienda where id =?', [id] ,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('borrar-vivienda', {vivienda:results[0]});
		}
	})
}

exports.deleteVivienda = (req,res) => {
	const id =  req.body.id;
	conexion.query('delete from vivienda where id = '+ id , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino la vivienda con ID' + id);
			res.redirect('/viviendas')
		}
	});
}

exports.deleteDepartamentoRender = (req,res) => { //Para devolver el id al formulario (renderer)
	const id = req.params.id;
	conexion.query('select * from departamento where id =?', [id] ,(error,results) => {
		if(error){
			throw error;
		}else{
			res.render('borrar-departamento', {departamento:results[0]});
		}
	})
}

exports.deleteDepartamento = (req,res) => {
	const id =  req.body.id;
	conexion.query('DELETE FROM departamento WHERE id =?', [id], (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino el departamento con ID' + id);
			res.redirect('/departamentos')
		}
	}
	)
}

/* YA INCORPORADO ARRIBA

-------------------------------------------- CREATE -------------------------------------------
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

---------------------------------------------------- UPDATE ---------------------------------------------
exports.editPersona = (req,res)=> {
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

--------------------------------------- INSERT ------------------------------------------------------------------
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