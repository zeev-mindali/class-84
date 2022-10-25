import { useState } from "react";
import { store } from "../../../redux/store";
import "./findMain.css";

function FindMain(): JSX.Element {
  const [user, setUser] = useState(store.getState().authState.userName);
  store.subscribe(() => {
    setUser(store.getState().authState.userName);
  });
  return (
    <div className="findMain">
      <h1>Find Car Data ({user})</h1>
      <hr />
      a system to find car data <br />
      Made by class 84
      <br />
      the best that lecturer can get
      <br />
    </div>
  );
}

export default FindMain;
