import { Route, Routes } from "react-router-dom";
import AddDonation from "../../Pages/AddDonation/AddDonation";
import DonationList from "../../Pages/DonationList/DonationList";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/donationList" element={<DonationList />} />
        <Route path="/addDonation/:id" element={<AddDonation />} />
        <Route path="/" element={<DonationList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Routing;
