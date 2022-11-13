import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import DonationModel from "../../../model/donation";
import donationService from "../../Services/DonationService";
import "./DonationList.css";

function DonationList(): JSX.Element {
  const [donations, setDonations] = useState<DonationModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    donationService
      .getAllDonation()
      .then((response) => setDonations(response))
      .catch((err) => alert(err.message));
  }, []);

  const delDonation = (id: number) => {
    //rest -> delete from api
    donationService.deleteDonation(id);
    setDonations(donations.filter((item) => item.id != id));
  };

  return (
    <div className="DonationList">
      <h1>Donation List</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>מסד</th>
            <th>שם התורם</th>
            <th>סכום</th>
            <th>אסמכתא</th>
            <th>ביטול</th>
            <th>תשלום באמצעות</th>
            <th>תאור</th>
            <th>עריכה</th>
            <th>מחיקה</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.sum}</td>
              <td>
                {item.auth_code === "undefined"
                  ? "ממתין לאישור"
                  : item.auth_code}
              </td>
              <td>{item.cancel_code}</td>
              <td>{item.payment}</td>
              <td>{item.memo}</td>
              <td>
                <button
                  onClick={() => {
                    console.log("navigate: ", "/addDonation/" + item.id);
                    navigate("/addDonation/" + item.id);
                  }}
                >
                  🖊
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    delDonation(item.id);
                  }}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonationList;
