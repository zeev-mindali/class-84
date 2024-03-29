import express from "express";
import config from "./utils/config";
import cors from "cors";
import controller from "./Routes/controller";
import routeNotFound from "./middleware/route-not-found";
import catchAll from "./middleware/catch-all";


const server = express();
//handle cors
server.use(cors());
//use json as data type to send to the client
server.use(express.json());

//our Routes..
server.use("/", controller);

//our middleware (handling error messages)
//if we didn't find any route, the server will run this command.

//show all the error messages
server.use("*", routeNotFound);

//catch all errors and show them to the user with the response message
server.use(catchAll);
server.listen(config.port, () => {
    console.log(`listening on http://localhost:${config.port}`);
});
