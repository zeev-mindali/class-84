import express from "express";
import config from "./config";
import cors from "cors";
import controller from "./Routes/controller";

const server = express();
//handle cors
server.use(cors());
//use json as data type to send to the client
server.use(express.json());
//use routes
server.use("/", controller);
server.listen(config.port, () => { console.log(`listening on http://localhost:${config.port}`) });



