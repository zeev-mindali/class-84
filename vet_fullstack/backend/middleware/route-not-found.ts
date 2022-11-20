import {NextFunction, Request, Response} from "express";
import {RouteNotFoundErr} from "../models/client-errors";

const routeNotFound = (request:Request, response:Response, next:NextFunction)=>{
    const err= new RouteNotFoundErr(request.originalUrl);
    next(err);
}

export default routeNotFound;