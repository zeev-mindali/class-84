import express,{NextFunction, Request,Response} from "express"
import medicine_logic from "../logic/medicine_logic";


const router_medicine = express.Router();

//get get all medicine names
router_medicine.get("/all", async (request:Request, response:Response, next:NextFunction)=>{
    console.log("all fired!!!");
    response.status(200).json(await medicine_logic.getAllMedicine());
});

//get medicine by id
router_medicine.get("/:id",async (request:Request, response:Response, next:NextFunction)=>{
    const medId = +request.params.id;
    response.status(200).json(await medicine_logic.getMedicineById(medId))

});


//post add new medicine name
router_medicine.delete("/:id", async (request:Request, response:Response, next:NextFunction)=>{
    const medicine = +request.params.id;
    await medicine_logic.deleteById(medicine);
    response.status(204).send("was deleted successfully");
})


//delete medicine


export default router_medicine;

