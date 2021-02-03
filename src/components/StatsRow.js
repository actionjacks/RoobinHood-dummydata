import React from "react";
import "./StatsRow.css";
import StockChart from "../images/stock.svg";

function StatsRow({ name, shares, openPrice, price }) {
  const percentage = ((price - openPrice) / openPrice) * 100;
  return (
    <div className="row">
      <div className="row__intro">
        <h1>{name}</h1>
        <p>{shares && shares + " shares"}</p>
        <p>shares</p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16} />
      </div>
      <div className="row__numbers">
        <p className="row__price">{price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
