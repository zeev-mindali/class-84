import express from "express";
import mysql_init from "./sql/init";
import cors from "cors";
import router_medicine from "./controllers/medicine_controller";
import routeNotFound from "./middleware/route-not-found";
import catchAll from "./middleware/catch-all";
import router_animal_type from "./controllers/animal_type_controller";
import owner_controller from "./controllers/owner_controller";
import router_animal from "./controllers/animal_controller";
const server = express();

//execute the init of mysql
mysql_init();


//express
server.use(cors());
server.use(express.json());
server.use("/api/medicine",router_medicine);
server.use("/api/animalType",router_animal_type);
server.use("/api/owner",owner_controller);
server.use("/api/animal",router_animal);
server.use("*",routeNotFound);
server.use(catchAll);
server.listen(3001, ()=>console.log("Server is on port 3001"));