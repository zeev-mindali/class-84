// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import { addDevice, changeValue, getAll, getById } from '../Logic/deviceLogic';
import dal_mysql from '../Utils/dal_mysql';


const deviceController = express.Router();

deviceController.get("/all", async (request: Request, response: Response, next: NextFunction) => {
    //get all devices
    response.status(200).json(await getAll());
  })

  deviceController.get("/:id",async (request: Request, response: Response, next: NextFunction) => {
    const deviceID = +request.params.id
    response.status(200).json(await getById(deviceID));
  })

  deviceController.post("/",async (request: Request, response: Response, next: NextFunction) => {
     const newDevice = request.body;
     response.status(201).json(await addDevice(newDevice));
  })


  //update value
  deviceController.get("/:id/:value",async (request: Request, response: Response, next: NextFunction) => {
    const deviceId = +request.params.id;
    const deviceValue = +request.params.value;
    response.status(201).json(await changeValue(deviceId,deviceValue));
  })

  deviceController.put("/",async (request: Request, response: Response, next: NextFunction) => {
    const deviceId = +request.body["deviceID"];
    const deviceValue =+request.body["value"];
    response.status(201).json(await changeValue(deviceId,deviceValue));
  })
  

export default deviceController;