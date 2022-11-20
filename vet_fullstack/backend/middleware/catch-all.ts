import {NextFunction, Request, Response} from "express";

const catchAll = (err:any, request:Request, response:Response, next:NextFunction)=>{
    //log error to console
    console.log(err);

    //log error to log file (HW)

    //get status code:
    const statusCode = err.status? err.status:500;

    //return error to frontend
    response.status(statusCode).send(err.message);
};

export default catchAll;