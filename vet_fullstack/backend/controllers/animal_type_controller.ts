import express,{NextFunction, Request,Response} from "express"
import animal_type_logic from "../logic/animal_type_logic";


const router_animal_type = express.Router();

//get get all medicine names
    router_animal_type.get("/", async (request:Request, response:Response, next:NextFunction)=>{
    response.status(200).json(await animal_type_logic.getAllAnimalTypes());
});

//get medicine by id
router_animal_type.get("/:id",async (request:Request, response:Response, next:NextFunction)=>{
    const medId = +request.params.id;
    response.status(200).json(await animal_type_logic.getAnimalTypeById(medId))

});


//delete animal by id
router_animal_type.delete("/:id", async (request:Request, response:Response, next:NextFunction)=>{
    const animal_Type_id = +request.params.id;
    await animal_type_logic.deleteAnimalTypeById(animal_Type_id);
    response.status(204);
});

//add animal
router_animal_type.post("/", async (request:Request, response:Response, next:NextFunction)=>{
    const newAnimal = request.body;
    const result = await animal_type_logic.addAnimalType(newAnimal);
    response.status(201).json(result);
})




//delete medicine


export default router_animal_type;

