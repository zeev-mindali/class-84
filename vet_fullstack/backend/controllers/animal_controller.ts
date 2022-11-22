import express,{NextFunction, Request,Response} from "express"
import animal_logic from "../logic/animal_logic";

const router_animal = express.Router();

//get get all medicine names
    router_animal.get("/", async (request:Request, response:Response, next:NextFunction)=>{
    response.status(200).json(await animal_logic.getAllAnimals());
});

//get animal by id
router_animal.get("/:id",async (request:Request, response:Response, next:NextFunction)=>{
    const medId = +request.params.id;
    response.status(200).json(await animal_logic.getAnimalById(medId))

});


export default router_animal;

