//---------------------------------------------------------------------------Var
const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql2");

//---------------------------------------------------------------------------Configuracion
app.set("port", process.env.PORT || 3003);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//---------------------------------------------------------------------------Puerto
app.listen(app.get("port"), () => {
  console.log("Server on port http://localhost:3003", app.get("port"));
});

//---------------------------------------------------------------------------DB
const conexion = mysql.createConnection(
  {
    host: "localhost",
    user: "webuser",
    password: "1234",
    port: 3306,
    database: "lab1",
  },
  "single"
);

conexion.connect((error) => {
  if (error) {
    console.error("No se pudo conectar a la BD: " + error);
    return;
  }
  console.log("Conectado a la DB");
});

module.exports = conexion;
//---------------------------------------------------------------------------Middlewares
app.use(morgan("dev"));
app.use(express.json());

//---------------------------------------------------------------------------Router
app.use('/',require('./router'));



app.use(express.urlencoded({ extended: false }));

//Archivos estaticos
app.use(express.static(__dirname + "/public"));