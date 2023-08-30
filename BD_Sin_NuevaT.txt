CREATE DATABASE IF NOT EXISTS lab1;
USE lab1;
create table PERSONA(
di INT PRIMARY KEY,
nombre VARCHAR(45) NOT NULL,
telefono INT, 
edad INT,
sexo VARCHAR(45));
create table VIVIENDA(
id_viv INT PRIMARY KEY,
direccion VARCHAR(45) NOT NULL,
capacidad INT NOT NULL, 
niveles INT NOT NULL);
create table MUNICIPIO(
id_mun INT PRIMARY KEY,
nombre VARCHAR(45) NOT NULL,
area DECIMAL(10,2), 
presupuesto INT);