use lab1;
insert into departamento (id, nombreDepartamento) values ('1','Amazonas');
insert into departamento (id, nombreDepartamento) values ('2','Antioquia');
insert into departamento (id, nombreDepartamento) values ('3','Arauca');
insert into departamento (id, nombreDepartamento) values ('4','Atlantico');
insert into departamento (id, nombreDepartamento) values ('5','Bolivar');
insert into departamento (id, nombreDepartamento) values ('6','Boyaca');
insert into departamento (id, nombreDepartamento) values ('7','Caldas');
insert into departamento (id, nombreDepartamento) values ('8','Caqueta');
insert into departamento (id, nombreDepartamento) values ('9','Casanare');
insert into departamento (id, nombreDepartamento) values ('10','Cauca');
insert into departamento (id, nombreDepartamento) values ('11','Cesar');
insert into departamento (id, nombreDepartamento) values ('12','Choco');
insert into departamento (id, nombreDepartamento) values ('13','Cordoba');
insert into departamento (id, nombreDepartamento) values ('14','Cundinamarca');
insert into departamento (id, nombreDepartamento) values ('15','Guainia');
insert into departamento (id, nombreDepartamento) values ('16','Guaviare');
insert into departamento (id, nombreDepartamento) values ('17','Huila');
insert into departamento (id, nombreDepartamento) values ('18','La Guajira');
insert into departamento (id, nombreDepartamento) values ('19','Magdalena');
insert into departamento (id, nombreDepartamento) values ('20','Meta');
insert into departamento (id, nombreDepartamento) values ('21','Narino');
insert into departamento (id, nombreDepartamento) values ('22','Norte de Santander');
insert into departamento (id, nombreDepartamento) values ('23','Putumayo');
insert into departamento (id, nombreDepartamento) values ('24','Quindio');
insert into departamento (id, nombreDepartamento) values ('25','Risaralda');
insert into departamento (id, nombreDepartamento) values ('26','San Andres y Providencia');
insert into departamento (id, nombreDepartamento) values ('27','Santander');
insert into departamento (id, nombreDepartamento) values ('28','Sucre');
insert into departamento (id, nombreDepartamento) values ('29','Tolima');
insert into departamento (id, nombreDepartamento) values ('30','Valle del Cauca');
insert into departamento (id, nombreDepartamento) values ('31','Vaupes');
insert into departamento (id, nombreDepartamento) values ('32','Vichada');

use lab1;
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 1', 'Apellido 1', 30, 1234567890, '1');
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 2', 'Apellido 2', 25, 1234567891, '2');
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 3', 'Apellido 3', 35, 1234567892, '3');
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 4', 'Apellido 4', 40, 1234567893, '4');
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 5', 'Apellido 5', 50, 1234567894, '5');

use lab1;
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 6', 'Apellido 6', 31, 12934567890, '6');
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 7', 'Apellido 7', 22, 12834567891, '7');
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 8', 'Apellido 8', 35, 16234567892, '9');
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 9', 'Apellido 9', 44, 14234567893, '2');
INSERT INTO Persona (nombre, apellido, edad, telefono, departamento) VALUES ('Persona 10', 'Apellido 10', 55, 15234567894, '1');

use lab1;
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 1', 100.0, 1000000, 1);
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 2', 200.0, 2000000, 2);
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 3', 300.0, 3000000, 3);
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 4', 400.0, 4000000, 4);
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 5', 500.0, 5000000, 5);
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 6', 100.0, 1000000, 6);
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 7', 200.0, 2000000, 7);
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 8', 300.0, 3000000, 8);
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 9', 400.0, 4000000, 9);
INSERT INTO Municipio (nombre, area, presupuesto, gobernador) VALUES ('Municipio 10', 500.0, 5000000, 10);

use lab1;
--USEN ESTA SENTENCIA PARA SABER EN QUE NUMERO AUTOGUARDÓ EL ID MUNICIPIO, EL MIO QUEDÓ DE 4-13:
--Select * from Municipio;
INSERT INTO Vivienda (direccion, capacidad, niveles, ubicacion) VALUES ('Direccion 1', 4, 1, 4);
INSERT INTO Vivienda (direccion, capacidad, niveles, ubicacion) VALUES ('Direccion 2', 3, 1, 6);
INSERT INTO Vivienda (direccion, capacidad, niveles, ubicacion) VALUES ('Direccion 3', 5, 2, 7);
INSERT INTO Vivienda (direccion, capacidad, niveles, ubicacion) VALUES ('Direccion 4', 2, 1, 8);
INSERT INTO Vivienda (direccion, capacidad, niveles, ubicacion) VALUES ('Direccion 5', 6, 3, 9);
INSERT INTO Vivienda (direccion, capacidad, niveles, ubicacion) VALUES ('Direccion 6', 6, 3, 10);
INSERT INTO Vivienda (direccion, capacidad, niveles, ubicacion) VALUES ('Direccion 7', 6, 3, 11);
INSERT INTO Vivienda (direccion, capacidad, niveles, ubicacion) VALUES ('Direccion 8', 6, 3, 12);
INSERT INTO Vivienda (direccion, capacidad, niveles, ubicacion) VALUES ('Direccion 9', 6, 3, 13);

use lab1;

--USEN ESTA SENTENCIA PARA SABER EN QUE NUMERO AUTOGUARDÓ EL ID VIVIENDA:
--Select * from Vivienda;

--USEN ESTA SENTENCIA PARA SABER EN QUE NUMERO AUTOGUARDÓ EL ID DEPARTAMENTO:
--SELECT * FROM departamento;

INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (1, 16, 2);
INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (2, 17, 3);
INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (3, 18, 4);
INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (4, 28, 5);
INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (5, 29, 6);
INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (6, 30, 8);
INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (7, 31, 7);
INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (8, 31, 2);
INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (9, 16, 3);
INSERT INTO Propietario (Persona_id, Vivienda_id, Departamento_id) VALUES (10, 18, 2);

