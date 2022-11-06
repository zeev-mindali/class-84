import express, { NextFunction, Request, Response } from "express";
import logic from "../Logic/logic";

const router = express.Router();

//test -> http://localhost:3100/test
router.get(
  "/test",
  (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(logic.makeTest());
  }
);

//user- > http://localhost:3100/user/zeev/48
router.get(
  "/user/:userName/:age",
  (request: Request, response: Response, next: NextFunction) => {
    const userName = request.params.userName;
    const userAge = +request.params.age;
    response.status(200).json(logic.sayHi(userName, userAge));
  }
);

router.get(
  "/donationList",
  (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(logic.getDonations());
  }
);

router.post(
  "/donationPost",
  (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(logic.getDonations());
  }
);

router.get("/", (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json(`{"msg":"hello "}`);
});

router.get(
  "/donation/:donationID",
  (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.donationID;
    //todo : make the logic
    response.status(200).json(logic.getSingleDonation(id));
  }
);

router.get(
  "/dontaionRange/:from/:to",
  (request: Request, response: Response, next: NextFunction) => {
    const from = +request.params.from;
    const to = +request.params.to;
    response.status(200).json(logic.getDonationRange(from, to));
  }
);

router.get(
  "/donationByName/:name",
  (request: Request, response: Response, next: NextFunction) => {
    const userName = request.params.name;
    response.status(200).json(logic.getDonationByName(userName));
  }
);

//add donation.....
router.post(
  "/addDonation",
  (request: Request, response: Response, next: NextFunction) => {
    const newDonation = request.body;
    response.status(201).json(logic.addDonation(newDonation));
  }
);

//delete donation
router.delete(
  "/delete/:id",
  (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    response.status(204).json(logic.deleteID(id));
  }
);

export default router;
