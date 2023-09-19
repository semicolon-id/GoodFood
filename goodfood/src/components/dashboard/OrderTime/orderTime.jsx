import React, { useState, useEffect } from "react";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Doughnut Chart",
    },
  },
};

// Menghasilkan data acak untuk chart
const randomData = Array.from(
  { length: 3 },
  () => Math.floor(Math.random() * 300) + 100
);

export const data = {
  labels: ["Afternoon", "Evening", "Morning"],
  datasets: [
    {
      data: randomData,
      backgroundColor: ["#5A6ACF", "#8593ED", "#C7CEFF"], // Perbaiki warna latar belakang di sini
      borderColor: ["#5A6ACF", "#8593ED", "#C7CEFF"],
    },
  ],
};

function OrderTime() {
  const [percentageData, setPercentageData] = useState([]);

  useEffect(() => {
    // Hitung persentase dari data dan simpan dalam state
    const total = randomData.reduce((acc, curr) => acc + curr, 0);
    const percentages = randomData.map((value) => ((value / total) * 100).toFixed(2));
    setPercentageData(percentages);
  }, []);

  return (
    <div className="px-[5%] pb-[2%] bg-white border-b font-sans my-5  lg:col-span-4 -ml-4 md:-ml-0">
      <div className="flex justify-between">
        <div className="text-left">
          <h1 className="font-medium text-lg">Order Time</h1>

          <p className="text-[#0000008b] text-sm mt-5">From 1-6 Dec, 2020</p>
        </div>

        <div>
          <div className="text-right border rounded-md flex justify-center gap-1 h-10 w-32 cursor-pointer">
            <p className=" font-semibold text-[#5A6ACF] my-auto">View Report</p>
          </div>
        </div>
      </div>

      <div className=" mx-auto w-80">
        <Doughnut options={options} data={data} />
      </div>

      <div className="flex justify-between mt-10">
        {data.labels.map((label, index) => (
          <div className="flex" key={index}>
            <div className={`bg-${data.datasets[0].backgroundColor[index]} bg-[#5A6ACF] w-2 h-2 rounded-full mt-2 mr-2`}></div>


            <div>
              <p className="text-[#121212] font-semibold">{label}</p>
              <p className="text-[#121212] ">{percentageData[index]}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderTime;
