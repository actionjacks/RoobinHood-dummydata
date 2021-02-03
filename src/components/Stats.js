import React, { useState, useEffect } from "react";
import StatsRow from "./StatsRow";
import "./Stats.css";
import axios from "axios";

function Stats() {
  // const APIKEY = "sandbox_c0c713748v6u6kubf4m0";
  //  const BASE_URL = "https://finnhub.io/api/v1/quote";

  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([
    {
      name: "AAPL",
      shares: "200",
      o: "23",
      c: "34",
    },
  ]);

  const tempStockData = [];

  const getStocksData = (stock) => {
    const APIKEY = "&token=c0c713748v6u6kubf4lg";
    const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
    axios
      .get(`${BASE_URL}${stock}${APIKEY}`)

      .then((item) => {
        tempStockData.push({
          name: stock,
          ...item.data,
        });
        setStockData(tempStockData);
      })
      .catch((error) => {
        console.error("Error", error.message);
      });
  };
  useEffect(() => {
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
      "CDR",
    ];
    stocksList.map((stock) => {
      getStocksData(stock);
    });
  }, []);

  // const getStocksData = (stock) => {
  //   return axios
  //     .get(`${BASE_URL}${stock}${APIKEY}`)
  //     .then((item) => {
  //       console.log(item);
  //     })
  //     .catch((error) => {
  //       console.error("Error", error.message);
  //     });
  // };

  // useEffect(() => {
  //   const stockList = [
  //     "AAPL",
  //     "MSFT",
  //     "TSLA",
  //     "FB",
  //     "CDR",
  //     "BABA",
  //     "UBER",
  //     "DIS",
  //     "SBUX",
  //   ];
  //   let tempStockData = [];
  //   let promises = [];
  //   stockList.map((stock) => {
  //     promises.push(
  //       getStocksData(stock)
  //       .then((res) => {
  //         tempStockData.push({
  //           name: stock,
  //           ...res?.data,
  //         });
  //       })
  //     );
  //   });
  //   Promise.all(promises).then(() => {
  //     setStockData(tempStockData);
  //     console.log(tempStockData);
  //   });
  // }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock?.name}
                name={stock?.name}
                openPrice={stock?.o}
                price={stock?.c}
                volume={stock.shares}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats__list">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {console.log(stockData)}
            {stockData.map((stock) => (
              <StatsRow
                key={stock?.name}
                name={stock?.name}
                openPrice={stock?.o}
                price={stock?.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
