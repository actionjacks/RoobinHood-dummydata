import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";

function Stats() {
  const [stockData, setStockData] = useState([]);

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

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/*  */}</div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">{/*  */}</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
