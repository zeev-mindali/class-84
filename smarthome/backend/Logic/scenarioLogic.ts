import Secnario from "../Models/secnario";
import dal_mysql from "../Utils/dal_mysql";

const getAll = async (): Promise<Secnario[]> => {
    // command line for the DB
    const sql = `
        SELECT secnario.* , device_type.name as device_type 
        FROM secnario JOIN device_type 
        ON secnario.device_type = device_type.id
    `;        
    // a promise function that connects us to the database with the command line
    const result = await dal_mysql.execute(sql);
    return result;
}

export {
    getAll,

}
