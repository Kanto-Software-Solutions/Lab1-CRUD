//---------------------------------------------------------------------------Variables
const express = require("express");
const path = require("path");
const app = express();

//---------------------------------------------------------------------------Configuracion
app.set("view engine", "ejs");						//motor de vistas
app.set("views", path.join(__dirname, "/views"));	//Cambia la ubicacion de las vistas
app.set("port", process.env.PORT || 3003);			//Configura puerto a usar

app.use(express.static(__dirname + "/public"));		//Carpeta de recursos publicos
app.use(express.urlencoded({ extended: false }));	//???


//---------------------------------------------------------------------------Puerto
app.listen(app.get("port"), () => {
	console.log("Server on port http://localhost:"+app.get("port"));
});

//---------------------------------------------------------------------------Router
app.use("/", require("./router"));