import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoute from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url)); // se obtienes el path del archivo actual

app.set("views", join(__dirname, "views")); // setea la carpeta en la cual esten las vistas o componentes reutilizables
app.set("view engine", "ejs"); // motor de vistas a usar

app.use(indexRoute); // el router en el que se crearon las rutas de la App
app.use(express.static(join(__dirname, "public")));

app.listen(process.env.PORT || 3000); // usa el puerto establecido en variables de entorno o 3000 por defecto
console.log("server is listening on port", 3000);
