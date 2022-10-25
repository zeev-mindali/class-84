import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Coins } from "./coinsModel";
import { store } from "./redux/store";
import { coinsUpdate } from "./redux/coinsState";

function App() {
  const url = "https://api.coingecko.com/api/v3/coins/";
  //const [coins, setCoins] = useState<Coins[]>([]);
  const [stam, setStam] = useState(false);

  const showCoin = () => {
    console.log(store.getState().coinState.coins);
  };

  useEffect(() => {
    if (store.getState().coinState.coins.length > 0) return;
    axios
      .get(url)
      .then((response) => {
        store.dispatch(coinsUpdate(response.data));
        //setCoins(response.data);
        setStam(true);
        console.log(store.getState().coinState.coins);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="App">
      <h1>My Coin</h1>
      <hr />

      {store.getState().coinState.coins.map((coin) => {
        return (
          <div className="Box" key={coin.id} style={{ height: 150 }}>
            <h3>{coin.name}</h3>
            <hr />
            {coin.id}
            <br />
            {coin.symbol}
          </div>
        );
      })}
    </div>
  );
}

export default App;
//id name symbol
