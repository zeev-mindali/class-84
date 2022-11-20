import { OkPacket } from "mysql";
import dal from "../utils/dal";
import Medicane_name from "../models/Medicane_name";

const getAllMedicine = async():Promise<Medicane_name[]>=>{
    const sql = "SELECT * FROM medicane_name";
    const medicine_list = await dal.execute(sql);
    return medicine_list;
}

const getMedicineById = async(id:number):Promise<Medicane_name>=>{
    const sql = `SELECT * FROM medicane_name WHERE id=${id}`;
   return await dal.execute(sql);
    
}

const deleteById = async(id:number):Promise<void>=>{
    const sql = `DELETE FROM medicane_name WHERE id=${id}`;
    return await dal.execute(sql);
}

export default {
    getAllMedicine,
    getMedicineById,
    deleteById,
}