import React from "react";

import salad from "../../../assets/components/dashboard/MostOrdered/salad.png";
import chicken from "../../../assets/components/dashboard/MostOrdered/chicken.png";
import smoothie from "../../../assets/components/dashboard/MostOrdered/smoothie.png";
import hot from "../../../assets/components/dashboard/MostOrdered/hot.png";

function mostOrdered() {
  return (
    <div className="p-[5%] lg:col-span-3 md:border-r -mt-5 border-b font-sans ">
      <div className="mt-4">
        <h1 className="font-medium text-lg">Most Ordered Food</h1>
        <p className="text-[#0000008b] text-xs my-2">
          Adipiscing elit, sed do eiusmod tempor
        </p>
      </div>

      <div className="mt-14">
        <ul className="">
          <li className="flex justify-between border-b py-5 ">
            <div className="flex gap-3">
              <img src={salad} alt="" />
              <h1 className="text-[#273240] text-medium tracking-wider">
                Fresh Salad Bowl
              </h1>
            </div>
            <p className=" text-[#0000008b] tracking-wider">IDR 45.000</p>
          </li>

          <li className="flex justify-between border-b py-5">
            <div className="flex gap-3">
              <img src={chicken} alt="" />
              <h1 className="text-[#273240] text-medium tracking-wider">
                Chicken Noodles
              </h1>
            </div>
            <p className=" text-[#0000008b] tracking-wider">IDR 75.000</p>
          </li>

          <li className="flex justify-between border-b py-5">
            <div className="flex gap-3">
              <img src={smoothie} alt="" />
              <h1 className="text-[#273240] text-medium tracking-wider">
                Smoothie Fruits
              </h1>
            </div>
            <p className=" text-[#0000008b] tracking-wider">IDR 45.000</p>
          </li>

          <li className="flex justify-between  py-5">
            <div className="flex gap-3">
              <img src={hot} alt="" />
              <h1 className="text-[#273240] text-medium tracking-wider">
                Hot Chicken Wings
              </h1>
            </div>
            <p className=" text-[#0000008b] tracking-wider">IDR 45.000</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default mostOrdered;
