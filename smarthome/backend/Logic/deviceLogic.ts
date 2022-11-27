import dal from "../Utils/dal_mysql"
import { OkPacket } from "mysql";
import Device_types from "../Models/device_type";


// functions( async / await ) for getting data from DB
const getAll = async (): Promise<Device_types[]> => {
    // command line for the DB
    const sql = "SELECT * FROM device_type";        
    // a promise function that connects us to the database with the command line
    const result = await dal.execute(sql);
    return result;
}

export {
    getAll,

}
