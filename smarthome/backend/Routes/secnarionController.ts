import express, {NextFunction, Request, Response} from 'express';
import { getAll } from '../Logic/scenarioLogic';


const secnarioController = express.Router();

secnarioController.get("/all", async (request: Request, response: Response, next: NextFunction) => {
    //get all devices
    response.status(200).json(await getAll());
  })
  

export default secnarioController;