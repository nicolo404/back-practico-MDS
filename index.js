//const { conexion } = require("./database/db");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routesUser = require("./Routes/RoutesUser");
const { connectToDatabase, getTables } = require('./database/dbmysql');

console.log("App de node Arrancada")
//conectar a la base de datos mysql
connectToDatabase();
// configurar dotenv
dotenv.config();

// crear servidor de nodejs con express
const app = express();
const puerto = 3001;
//configurar el cors
app.use(cors());
// middleware convertir body a json
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));

//ruta con controlladores
app.use("/api", routesUser);

// crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
});

// Función para realizar consultas a la base de datos
getTables();