import mysql from "mysql";
import config from "./config";

//create a connection object
const connection = mysql.createPool({
    host:config.mysqlHost,
    user:config.mysqlUser,
    password: config.mysqlPassword,
    database: config.mysqlDatabase,
   
});

const execute = (sql:string):Promise<any>=>{
    return new Promise<any>((resolve,reject)=>{
        //execute the sql to mysql:
        connection.query(sql,  (err,result)=>{
            //if there is an error, reject and send promise, rejected
            if (err){
                reject(err);
                return;
            }
            
            //no error (possibly no leon program)
            resolve(result);
        })
    });
}

export default {execute};