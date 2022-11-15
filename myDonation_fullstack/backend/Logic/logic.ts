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

const createPriviliages = async():Promise<void> =>{
    const sql = `
    ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '12345678';
    flush privileges;
    `;
    const response = await dal_mysql.execute(sql);
    return response;
}

const createDonationTable = async():Promise<void>=>{
    const sql = "CREATE TABLE IF NOT EXISTS `myDonation`.`donation` (`id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(45) NOT NULL , `sum` INT NOT NULL , `auth_code` VARCHAR(45) NOT NULL , `cancel_code` VARCHAR(45) NOT NULL , `payment_code` INT NOT NULL , `memo` VARCHAR(45) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
    const response = await dal_mysql.execute(sql);
    return response;
}

const createPaymentTable = async():Promise<void>=>{
    const sql = "CREATE TABLE IF NOT EXISTS `myDonation`.`payment` (`id` INT NOT NULL AUTO_INCREMENT , `payment` VARCHAR(45) NOT NULL , `auth_code` VARCHAR(45) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
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
    updateDonation,
    createPriviliages,
    createDonationTable,
    createPaymentTable,
}