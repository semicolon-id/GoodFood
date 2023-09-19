import React from "react";

import Revenue from "./Revenue/Revenue";
import OrderTime from "./OrderTime/orderTime";
import YourRating from "./YourRating/yourRating";
import MostOrdered from "./MostOrdered/mostOrdered";
import Order from "./Order/Order";

function dashboard() {
  return (
    <div className="mt-14">
      <h1 className="text-2xl text-[#1F384C] font-semibold font-sans ml-10">Dashboard</h1>
      <div className=" grid grid-rows-10 lg:grid-cols-10 font-sans w-full mt-3">
        <Revenue />
        <OrderTime />
        <YourRating />
        <MostOrdered />
        <Order />
      </div>
    </div>
  );
}

export default dashboard;
