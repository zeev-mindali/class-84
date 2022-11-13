//return data in promise (pending,full field,rejected)
import { OkPacket } from "mysql";
import Donation from "../model/Donation";
import Payment from "../model/Payment"
import dal_mysql from "../util/dal_mysql";

const getAllPayment = async (): Promise<Payment[]> => {
    const sql = "SELECT * FROM payment";
    const response = await dal_mysql.execute(sql);
    return response;
}


const getAllDonations = async (): Promise<Donation[]> => {
    const sql = `
        SELECT donation.* , payment.payment 
        FROM donation JOIN payment
        ON donation.payment_code = payment.id`
        ;
    const response = await dal_mysql.execute(sql);
    console.log(response);
    return response;
}

const getSingleDonation = async (id: number): Promise<Donation> => {
    const sql = `SELECT * FROM donation WHERE id=${id}`;
    const response = await dal_mysql.execute(sql);
    return response;
}

const deleteDonation = async (id: number): Promise<void> => {
    const sql = `DELETE FROM donation WHERE id=${id}`;
    const response = await dal_mysql.execute(sql);
    return response;
}

const addDonation = async (donation: Donation): Promise<Donation> => {
    const sql = `INSERT INTO donation VALUES(default,
        '${donation.name}',
        ${donation.sum},
        '${donation.auth_code}',
        '',
        ${donation.payment_code},
        '${donation.memo}'
        )`;
    const response: OkPacket = await dal_mysql.execute(sql);
    donation.id = response.insertId;
    return donation;
}

const updateDonation = async (donation: Donation): Promise<Donation> => {
    //UPDATE `donation`.`donation` SET `sum` = '0', `auth_code` = 'bla bla', `memo` = 'bla bla' WHERE (`id` = '4');

    const sql = `
        UPDATE donation 
        SET sum=${donation.sum}, auth_code='${donation.auth_code}', 
        memo = '${donation.memo}', cancel_code='${donation.cancel_code}',
        name = '${donation.name}', payment_code=${donation.payment_code}

        WHERE id=${donation.id}
    `;
    const response = await dal_mysql.execute(sql);
    return donation;
}
export default {
    getAllPayment,
    getAllDonations,
    getSingleDonation,
    deleteDonation,
    addDonation,
    updateDonation
}