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

const getById = async(id:number):Promise<Device_types>=>{
    const sql = "";
    const result = await dal.execute(sql);
    return result;
}

const addDevice = async(newDevice:Device_types):Promise<Device_types>=>{
    const sql = "";
    const result:OkPacket = await dal.execute(sql);
    newDevice.id = result.insertId;
    return newDevice;
}

const changeValue = async(deviceId:number,value:number):Promise<void>=>{
    const sql = `UPDATE device_type SET value=${value} WHERE id=${deviceId}`;
    await dal.execute(sql);
}

export {
    getAll,
    getById,
    addDevice,
    changeValue,
}
