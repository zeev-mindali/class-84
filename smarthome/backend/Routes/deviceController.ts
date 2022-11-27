// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import { getAll } from '../Logic/deviceLogic';
import dal_mysql from '../Utils/dal_mysql';


const deviceController = express.Router();

deviceController.get("/all", async (request: Request, response: Response, next: NextFunction) => {
    //get all devices
    response.status(200).json(await getAll());
  })
  

export default deviceController;