//get donations
//get payments
//get single donation
//delete donation
//update donation
//add new donation
import axios from "axios";

import DonationModel from "../../model/donation";
import PaymentModel from "../../model/payments";

class DonationService {
    public async getAllDonation(): Promise<DonationModel[]> {
        const response = await axios.get<DonationModel[]>("http://localhost:3100/api/donation/all");

        return response.data;
    }

    public async deleteDonation(id: number): Promise<void> {
        await axios.delete(`http://localhost:3100/api/donation/${id}`)
    }

    public async getPayments(): Promise<PaymentModel[]> {
        return ((await axios.get<PaymentModel[]>("http://localhost:3100/api/payments/all")).data);
    }

    public async sendDonation(donation: DonationModel): Promise<DonationModel> {
        return await axios.post("http://localhost:3100/api/donation", donation);
    }

    public async getSingleDonation(id: number): Promise<DonationModel[]> {
        return ((await axios.get<DonationModel[]>("http://localhost:3100/api/donation/" + id)).data);
    }

    public async updateDonation(donation: DonationModel): Promise<void> {
        await axios.put<DonationModel>("http://localhost:3100/api/donation", donation);
    }
}

const donationService = new DonationService();
export default donationService;