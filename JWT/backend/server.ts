import { createStudents, createClasses } from './Utils/init';
// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import config from "./Utils/config";
import dal_mysql from "./Utils/dal_mysql";
import router from './Routes/controller';
import fileupload from 'express-fileupload';
// import bodyParser from 'body-parser';
// import morgan from 'morgan';
// import _ from 'lodash';

const server = express();

const currentPort = config.port;
dal_mysql.execute(createStudents);
dal_mysql.execute(createClasses);

//cors option
var corsOptions = {
    "origin": "*", //expose to all server around the world
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //expose which methods are allowed
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "exposedHeaders" : "Authorization" //expose the Authorization header
  }

  server.use(cors(corsOptions));
server.use(express.json());
server.use(express.static('user_image'));
//enable file uploading , and create a path for the files if it not exists
server.use(fileupload({
    createParentPath: true
}));
//parse the body as json , for easy work
//server.use(bodyParser.json());
//encode url as the format that we need
//server.use(bodyParser.urlencoded({extended:true}));
//server.use(morgan('dev'));

// server.use("/devices", deviceController);
// server.use("/secnarios",secnarioController)
server.use("/student",router);
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )