// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import deviceController from "./Routes/deviceController";
import secnarioController from "./Routes/secnarionController";
import config from "./Utils/config";
import dal_mysql from "./Utils/dal_mysql";
import { create_device_type, create_secnario } from "./Utils/init";


const server = express();
const currentPort = config.port;
dal_mysql.execute(create_device_type);
dal_mysql.execute(create_secnario);
server.use(cors());
server.use(express.json());
server.use("/devices", deviceController);
server.use("/secnarios",secnarioController)
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )