import { Route, Routes } from "react-router-dom";

import CarLocator from "../CarLocator/CarLocator";
import Findbike from "../findbike/findbike";
import FindHandiCap from "../findHandiCap/findHandiCap";
import FindMain from "../findMain/findMain";
import FindOffRoad from "../findOffRoad/findOffRoad";
import FindRecall from "../findRecall/findRecall";
import FindTruck from "../findTruck/findTruck";
import Page404 from "../Page404/Page404";

function Routing(): JSX.Element {
  return (
    <div className="routing">
      <Routes>
        <Route path="/" element={<FindMain />} />
        <Route path="/car" element={<CarLocator />} />
        {/*  Single car passing paramters to Component*/}
        <Route path="/bike" element={<Findbike />} />
        <Route path="/truck" element={<FindTruck />} />
        <Route path="/offRoad" element={<FindOffRoad />} />
        <Route path="/handiCap" element={<FindHandiCap />} />
        <Route path="/recall" element={<FindRecall />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;

/*
  <Route path="/badForm" element={<BadForm />} />
        <Route path="/goodForm" element={<GoodForm />} />
        <Route path="/coolForm" element={<MuiForm />} />
*/
