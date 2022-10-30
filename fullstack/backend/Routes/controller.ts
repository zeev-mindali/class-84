import express, { NextFunction, Request, Response } from "express";
import logic from "../Logic/logic";

const router = express.Router();

//test -> http://localhost:3100/test
router.get("/test", (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(logic.makeTest());
});



//user- > http://localhost:3100/user/zeev/48
router.get("/user/:userName/:age", (request: Request, response: Response, next: NextFunction) => {
    const userName = request.params.userName;
    const userAge = +request.params.age;
    response.status(200).json(logic.sayHi(userName, userAge))
})

router.get("/", (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(`{"msg":"hello "}`);
})

export default router;