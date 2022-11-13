import { useEffect, useState } from "react";
import PaymentModel from "../../../model/payments";
import "./AddDonation.css";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import donationService from "../../Services/DonationService";
import DonationModel from "../../../model/donation";

function AddDonation(): JSX.Element {
  const [payments, setPayments] = useState<PaymentModel[]>([]);
  const { register, handleSubmit } = useForm<DonationModel>();
  const [donation, setDonation] = useState<DonationModel>();

  //navigate -> once the form was sended, go back to donation list
  const navigate = useNavigate();
  const params = useParams();
  const id = +(params.id || "");

  const getSingleDonation = async (id: number) => {
    const data = await donationService.getSingleDonation(id);
    console.log(data[0]);
    setDonation(data[0]);
  };

  useEffect(() => {
    console.log(id);
    if (id > 0) {
      //load data from our data base
      getSingleDonation(id);
    }
    donationService
      .getPayments()
      .then((response) => setPayments(response))
      .catch((err) => alert(err.message));
  }, []);

  const send = async (donation: DonationModel) => {
    console.log(donation);
    // try {
    //   if (id > 0) {
    //     donationService.updateDonation(donation);
    //   } else {
    //     await donationService.sendDonation(donation);
    //   }
    //   navigate("/donationList");
    // } catch (err: any) {
    //   console.log(err.message);
    // }
  };

  return (
    <div className="AddDonation">
      <h1>Add New Donation</h1>
      <hr />
      <form onSubmit={handleSubmit(send)}>
        <label>שם התורם:</label>
        <input type="text" value={donation?.name} {...register("name")} />

        <label>סכום</label>
        <input type="number" value={donation?.sum} {...register("sum")} />

        <select
          defaultValue={donation?.payment_code}
          {...register("payment_code")}
        >
          <option disabled value="">
            בחר סוג תשלום
          </option>
          {payments.map((item) => (
            <option key={item.id} value={item.id}>
              {item.payment}
            </option>
          ))}
        </select>

        <textarea
          rows={5}
          cols={38}
          value={donation?.memo}
          {...register("memo")}
        />
        <button>הוסף תרומה</button>
      </form>
    </div>
  );
}

export default AddDonation;
