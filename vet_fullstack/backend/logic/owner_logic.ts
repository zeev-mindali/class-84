import { OkPacket } from "mysql";
import dal from "../utils/dal";
import Animal_type from "../models/Owner";
import Owner from "../models/Owner";

const getAllOwners = async():Promise<Owner[]>=>{
    const sql = "SELECT * FROM owner";
    const medicine_list = await dal.execute(sql);
    return medicine_list;
}

const getOwnerById = async(id:number):Promise<Owner>=>{
    const sql = `SELECT * FROM owner WHERE id=${id}`;
   return await dal.execute(sql);
    
}

const deleteOwnerById = async(id:number):Promise<void>=>{
    const sql = `DELETE FROM owner WHERE id=${id}`;
    return await dal.execute(sql);
}

const addOwner = async(newOwner:Owner):Promise<Owner>=>{
    const sql = `
        INSERT INTO owner (owner, tel, cell, address, city) 
        VALUES ('${newOwner.owner}', '${newOwner.tel}', '${newOwner.cell}','${newOwner.address}', '${newOwner.city}');
    `;
    const result:OkPacket =  await dal.execute(sql);
    newOwner.id = result.insertId;
    return newOwner;
}

const updateOwner = async(owner:Owner):Promise<Owner>=>{
    const sql = `
        UPDATE owner SET owner = '${owner.owner}', tel = '${owner.tel}', cell = '${owner.cell}', address = '${owner.address}', city = '${owner.city}' 
        WHERE (id = ${owner.id});

    `;
    const result:OkPacket =  await dal.execute(sql);
    //owner.id = result.insertId;
    return owner;
}

export default {
    getAllOwners,
    getOwnerById,
    deleteOwnerById,
    addOwner,
    updateOwner,
}