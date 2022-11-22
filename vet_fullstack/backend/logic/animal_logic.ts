import { OkPacket } from "mysql";
import dal from "../utils/dal";
import Animal from "../models/Animal";

const getAllAnimals = async (): Promise<Animal[]> => {
    const sql = `
        SELECT animals.*, animal_type.animal_type, owner.*   
        FROM animals 
        JOIN animal_type ON animals.type = animal_type.id
        JOIN owner ON animals.owner=owner.id`;
    const animal_list = await dal.execute(sql);
    return animal_list;
}


//CYBER SECURITY : SQL INJECTION  id = 1 OR 1=1
//to solve SQL INJECTION we will use values as ?
const getAnimalById = async (id: number): Promise<Animal> => {
    const sql = `
    SELECT animals.*, animal_type.animal_type, owner.owner,owner.tel  
    FROM animals 
    JOIN animal_type ON animals.type = animal_type.id
    JOIN owner ON animals.owner=owner.id
    WHERE animals.id=${id}`;
    //const sql = `SELECT * FROM animals WHERE id=?`;
    return await dal.execute(sql);
}

export default {
    getAllAnimals,
    getAnimalById,
}