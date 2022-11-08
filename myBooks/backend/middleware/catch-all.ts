import { Request, Response, NextFunction } from "express";

const catchAll = (
  err: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  //log error to console
  console.log(err);

  //log error to log file...

  //get Status Code:
  const statusCode = err.status ? err.status : 500;

  //return error to front end....
  response.status(statusCode).send(err.message);
};

export default catchAll;
