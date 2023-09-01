//---------------------------------------------------------------------------Var
const express = require("express");
const app = express();
const path = require("path");

//---------------------------------------------------------------------------Configuracion
app.set("port", process.env.PORT || 3003);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//---------------------------------------------------------------------------Puerto
app.listen(app.get("port"), () => {
	console.log("Server on port http://localhost:3003", app.get("port"));
});

//---------------------------------------------------------------------------Router
app.use("/", require("./router"));

app.use(express.urlencoded({ extended: false }));

//Archivos estaticos
app.use(express.static(__dirname + "/public"));
