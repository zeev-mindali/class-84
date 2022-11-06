import { Request, Response, NextFunction } from "express";
import { SumNotFoundError } from "../model/client-errors";

const sumNotFoundError = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const err = new SumNotFoundError();
  next(err);
};

export default sumNotFoundError;
