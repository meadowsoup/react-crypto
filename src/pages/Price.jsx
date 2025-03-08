import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


function Price() {
     const apiKey = "56a5251a-d496-4fbf-a196-0d106650597a";
     const { symbol } = useParams();
     // const symbol = params.symbol;
     const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
     const [coin, setCoin] = useState(null);
     const getCoin = async() => {
          try {
               const response = await fetch(url);
               const data = await response.json();
               setCoin(data);
          } catch (e) {
               console.error(e);
          }
     };

     useEffect(() => {
          getCoin();
     }, [symbol]);

     if (!coin) return <h1>✨ Loading magic... ✨</h1>;

  return (
    <div className="price-container">
      <h1>
        {coin.asset_id_base} / {coin.asset_id_quote}
      </h1>
      <h2>💰 {coin.rate} USD</h2>
    </div>
  );

     // const loaded = () => {
     //      return (
     //           <div>
     //                <h1>
     //                     {coin.asset_id_base}/{coin.asset_id_quote}
     //                </h1>
     //                <h2>
     //                     {coin.rate}
     //                </h2>
     //           </div>
     //      )
     // };

     // const loading = () => {
     //      return <h1>Loading...</h1>
     // }

     // return coin && coin.rate ? loaded() : loading();
};

export default Price;