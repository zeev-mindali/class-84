import { OkPacket } from "mysql";
import dal from "../utils/dal";
import Medicane_name from "../models/Medicane_name";

const getAllMedicine = async():Promise<Medicane_name[]>=>{
    const sql = "SELECT * FROM medicane_name";
    const medicine_list = await dal.execute(sql);
    return medicine_list;
}


export default {
    getAllMedicine,
}