import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['01', '02', '03', '04', '05', '06'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Last 6 days',
      data: labels.map(() => Math.floor(Math.random() * 200) - 100), // Menggunakan Math.random() untuk data acak
      borderColor: '#5A6ACF',
      backgroundColor: '#5A6ACF',
    },
    {
      label: 'Last Week',
      data: labels.map(() => Math.floor(Math.random() * 200) - 100), // Menggunakan Math.random() untuk data acak
      borderColor: '#E6E8EC',
      backgroundColor: '#E6E8EC',
    },
  ],
};

function Revenue() {
  return (
    <div className="p-[5%] bg-white rounded-lg shadow-sm font-sans my-5  lg:col-span-4 -mt-5 border-t md:border-none ">
      <div className="flex justify-between">
        <div className="text-left">
          <h1 className="font-medium text-lg">Order</h1>
          <h1 className="text-2xl font-semibold">2.568</h1>
          <span className="text-[#737B8B] text-sm font-semibold ">
            <span className="text-[#F2383A] "> <span className="text-lg">↓  </span> 2.1% </span> vs last week
          </span>
          <p className="text-[#0000008b] text-sm mt-5">Sales from 1-6 Dec, 2020 </p>
        </div>

        <div>
          <div className="text-right border rounded-md flex justify-center gap-1 h-10 w-32 cursor-pointer mt-2">
            <p className=" font-semibold text-[#5A6ACF] my-auto">
            View Report
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default Revenue;
