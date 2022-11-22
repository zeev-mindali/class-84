import express,{NextFunction, Request,Response} from "express"
import owner_logic from "../logic/owner_logic";


const owner_controller = express.Router();

//get get all owners
owner_controller.get("/all", async (request:Request, response:Response, next:NextFunction)=>{
    response.status(200).json(await owner_logic.getAllOwners());
});

//get owner by id
owner_controller.get("/:id",async (request:Request, response:Response, next:NextFunction)=>{
    const ownerId = +request.params.id;
    response.status(201).json(await owner_logic.getOwnerById(ownerId));
});


//post add new owner name
owner_controller.post("/",async (request:Request, response:Response, next:NextFunction)=>{
    const owner = request.body;
    response.status(201).json(await owner_logic.addOwner(owner));
})

//update owner
owner_controller.put("/",async (request:Request, response:Response, next:NextFunction)=>{
    const owner = request.body;
    response.status(202).json(await owner_logic.updateOwner(owner));
})

//delete owner
owner_controller.delete("/:id", async (request:Request, response:Response, next:NextFunction)=>{
    const ownerId = +request.params.id;
    await owner_logic.deleteOwnerById(ownerId);
    response.status(201).send("was deleted successfully");
})


export default owner_controller;

