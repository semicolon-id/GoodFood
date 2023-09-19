import React from "react";

import Chart1 from "../../../assets/components/dashboard/YourRating/Chart1.png"
import Chart2 from "../../../assets/components/dashboard/YourRating/Chart2.png"
import Chart3 from "../../../assets/components/dashboard/YourRating/Chart3.png"

function yourRating() {
  return (
    <div className="p-[5%] lg:col-span-3 border-r -mt-5 -z-50 md:ml-5 border-b md:border-r font-sans">
      <div className="mt-4 mb-16">
        <h1 className="font-medium text-lg">Your Rating</h1>
        <p className="text-[#0000008b] text-xs my-2">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      <div className="relative">
        <img src={Chart1} alt="" className="ml-12 md:ml-16"/>
        <img src={Chart2} alt="" className="absolute top-0 right-0 md:right-4"/>
        <img src={Chart3} alt="" className="-mt-2"/>

      </div>
    </div>
  );
}

export default yourRating;
