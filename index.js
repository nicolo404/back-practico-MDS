const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routesUser = require("./Routes/RoutesUser");
const routesTbl_usuario = require("./Routes/tbl_usuarioRoutes");
const routesTbl_tipoentrada = require("./Routes/tbl_tipoentradaRoutes");
const routesTbl_categoriaentrada = require("./Routes/tbl_categoriaentradaRoutes");
const routesTbl_supervisor = require("./Routes/tbl_supervisorRoutes");
const routesTbl_avisomail = require("./Routes/tbl_avisomailRoutes");
const routerTbl_parametro = require("./Routes/tbl_parametroRoutes");  
const {getConnection, getTables} = require("./database/dbmysql");

// configurar dotenv
dotenv.config();

// crear servidor de nodejs con express
const app = express();
const puerto = 3001;

// Configurar el cors
app.use(cors());

// Middleware convertir body a JSON
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));

// Rutas con controladores
app.use("/api", routesUser);
app.use("/api", routesTbl_usuario);
app.use("/api", routesTbl_tipoentrada);
app.use("/api", routesTbl_categoriaentrada);
app.use("/api", routesTbl_supervisor);
app.use("/api", routesTbl_avisomail);
app.use("/api", routerTbl_parametro);
// Conectar a la base de datos MySQL
getConnection().then(() => {
  // Iniciar el servidor y escuchar peticiones HTTP
  app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
  });
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

