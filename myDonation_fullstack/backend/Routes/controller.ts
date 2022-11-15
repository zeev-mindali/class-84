import express, { NextFunction, Request, Response } from "express";
import logic from "../Logic/logic";
import Urls from "../util/Urls";

const router = express.Router();

//init

router.get("/init",async (request: Request, response: Response, next: NextFunction) => {
    await logic.createDonationTable();
    await logic.createPaymentTable();
    response.status(201).json('{"msg":"tables was created successfully"}');
} )

//GET->All Donations
router.get(Urls.getAllDonations, async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await logic.getAllDonations());
})
//GET->All Payments
router.get(Urls.getAllPayments, async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await logic.getAllPayment());
})
//GET->Single Donation
router.get(Urls.getSingleDonation, async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    response.status(200).json(await logic.getSingleDonation(id));
})
//DELETE->Delete donation
router.delete(Urls.deleteDonation, async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    response.status(204).json(await logic.deleteDonation(id));
})
//UPDATE->Update donation
router.put(Urls.updateDonation, async (request: Request, response: Response, next: NextFunction) => {
    const donation = request.body;
    response.status(201).json(await logic.updateDonation(donation));
})
//POST->Add donation
router.post(Urls.addDonation, async (request: Request, response: Response, next: NextFunction) => {
    const donation = request.body;
    response.status(201).json(await logic.addDonation(donation));
})

export default router;
