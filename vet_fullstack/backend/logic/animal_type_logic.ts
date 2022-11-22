import { OkPacket } from "mysql";
import dal from "../utils/dal";
import Animal_type from "../models/Animal_type";

const getAllAnimalTypes = async():Promise<Animal_type[]>=>{
    const sql = "SELECT * FROM animal_type";
    const medicine_list = await dal.execute(sql);
    return medicine_list;
}

const getAnimalTypeById = async(id:number):Promise<Animal_type>=>{
    const sql = `SELECT * FROM animal_type WHERE id=${+id}`;
   return await dal.execute(sql);
    
}

const deleteAnimalTypeById = async(id:number):Promise<void>=>{
    const sql = `DELETE FROM animal_type WHERE id=${+id}`;
    return await dal.execute(sql);
}

const addAnimalType = async(newAnimal:Animal_type):Promise<Animal_type>=>{
    const sql = `INSERT INTO animal_type values (DEFAULT,'${newAnimal.animal_type}')`;
    const result:OkPacket =  await dal.execute(sql);
    newAnimal.id = result.insertId;
    return newAnimal;
}

export default {
    getAllAnimalTypes,
    getAnimalTypeById,
    deleteAnimalTypeById,
    addAnimalType,
}