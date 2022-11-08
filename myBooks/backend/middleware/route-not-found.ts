import { Request, Response, NextFunction } from "express";
import { RouteNotFoundError } from "../model/client-errors";

const routeNotFound = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const err = new RouteNotFoundError(request.originalUrl);
  next(err);
};

export default routeNotFound;
