import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const randomData = Array.from(
  { length: labels.length },
  () => Math.floor(Math.random() * 300) + 100
);
const randomData2 = Array.from(
  { length: labels.length },
  () => Math.floor(Math.random() * 300) + 100
);

export const data = {
  labels,
  datasets: [
    {
      label: "Last 6 days",
      data: randomData, // Ubah data sesuai dengan kebutuhan
      backgroundColor: "#5A6ACF", // Ubah warna latar belakang untuk online sales
      //   barThickness: 10, // Mengatur ketebalan bar (lebar) menjadi lebih tipis sesuai kebutuhan
      barPercentage: 0.7, // Mengatur lebar relatif bar Offline Sales
      //   borderRadius: 6, // Mengatur sudut bar menjadi lebih bulat (gunakan angka yang sesuai dengan preferensi Anda)
    },
    {
      label: "Last Week",
      data: randomData2, // Ubah data sesuai dengan kebutuhan
      backgroundColor: "#E6E8EC", // Ubah warna latar belakang untuk offline sales
      //   barThickness: 10, // Mengatur ketebalan bar (lebar) menjadi lebih tipis sesuai kebutuhan
      barPercentage: 0.7, // Mengatur lebar relatif bar Offline Sales
      //   borderRadius: 6, // Mengatur sudut bar menjadi lebih bulat (gunakan angka yang sesuai dengan preferensi Anda)
    },
  ],
};

function Revenue() {
  return (
    <div className="px-[5%] pb-[2%] bg-white border-r border-b font-sans my-5 lg:col-span-6">
      <div className="flex justify-between">
        <div className="text-left">
          <h1 className="font-medium text-lg">Revenue</h1>
          <h1 className="text-2xl font-semibold">IDR 7.852.000</h1>
          <span className="text-[#737B8B] text-sm font-semibold ">
            <span className="text-[#149D52] "> <span className="text-lg">↑  </span> 2.1% </span> vs last week
          </span>
          <p className="text-[#0000008b] text-sm mt-5">Sales from 1-12 Dec, 2020</p>
        </div>

        <div>
          <div className="text-right border rounded-md flex justify-center gap-1 h-10 w-32 cursor-pointer">
            <p className=" font-semibold text-[#5A6ACF] my-auto">
            View Report
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full ">
        <Bar options={options} data={data} />
      </div>

     
    </div>
  );
}

export default Revenue;
