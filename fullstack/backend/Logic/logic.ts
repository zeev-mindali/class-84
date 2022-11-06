//return data in promise (pending,full field,rejected)

import Donation, { deleteME, donationList } from "../model/Donation";

//get all payments

//get all donations
function getDonations() {
  return donationList;
}

//get single donation
function getSingleDonation(id: number) {
  return donationList.filter((item) => item.getID() === id);
}
//add donation
function addDonation(newDonation: Donation) {
  //const myDonation = new Donation();
  //myDonation.getDonation(newDonation);
  //donationList.push(myDonation);
  donationList.push(newDonation);
}

//delete donation
function deleteID(id: number) {
  //donationList = donationList.filter((item) => item.getID() !== id); will not work becuase it's an import
  deleteME(id);
}

//update donation

//cancel donation

//get donation range by sum
function getDonationRange(from: number, to: number) {
  return donationList.filter(
    (item) => item.getSum() >= from && item.getSum() <= to
  );
}

//get donation by name
function getDonationByName(userName: string) {
  return donationList.filter(
    (item) =>
      item.getName().includes(userName) || item.getLastName().includes(userName)
  );
}

//testmode
function makeTest() {
  return { name: "Leon", moto: "mess with the best and die like the rest" };
}
function sayHi(userName: string, age: number) {
  return {
    name: "Hello " + userName,
    born: 2022 - age,
  };
}

export default {
  makeTest,
  sayHi,
  getDonations,
  getSingleDonation,
  getDonationRange,
  getDonationByName,
  addDonation,
  deleteID,
};
