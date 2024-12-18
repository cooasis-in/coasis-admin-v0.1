import React, { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Function to calculate percentage dynamically
const calculatePercentage = (part, total) => {
  return (part / total) * 100;
};

const CreatorPieChart = () => {
  const [creatorsCount, setCreatorsCount] = useState(0);
  const [brandsCount, setBrandsCount] = useState("");
  const total = 10;

  const dynamicCreatorsCount = creatorsCount || "10";
  const dynamicBrandsCount = brandsCount || "05";

  const creatorsPercentage = calculatePercentage(dynamicCreatorsCount, total);
  const brandsPercentage = calculatePercentage(dynamicBrandsCount, total);
  const totalUsed = creatorsPercentage + brandsPercentage;
  const totalAvailable = totalUsed/2;

  // Chart data with dynamic percentages
  const data = {
    datasets: [
      {
        data: [creatorsPercentage, brandsPercentage, totalAvailable],
        backgroundColor: [
          "rgba(255, 197, 38, 0.847)",
          "rgba(255, 142, 142, 0.9)",
          "rgba(0, 242, 255, 0.397)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 197, 38, 0.847)",
          "rgba(255, 142, 142, 0.9)",
          "rgba(0, 242, 255, 0.397)",
        ],
        borderWidth: 20,
        borderColor: "#141414",
        borderRadius: 20,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="h-fit bg-[#141414] rounded-3xl flex justify-between items-center px-10">
      <div className="basis-[55%] ml-10">
        <div className="p-4 flex-row gap-6">
          <div className="flex gap-5">
            {/* Displaying the current creators count */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[20px] font-normal mb-2 opacity-55">
                Total Creators
              </h1>
              <h1 className="text-[45px] font-normal mb-4">
                {dynamicCreatorsCount}
              </h1>
            </div>

            {/* Displaying the current brands count */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[20px] font-normal mb-2 opacity-55">
                Total Brands
              </h1>
              <h1 className="text-[45px] font-normal mb-4">
                {dynamicBrandsCount}
              </h1>
            </div>
          </div>

          <div>
            <p className="mb-8 opacity-55 text-[20px]">Total Bandwidth:</p>
            <div className="mt-10">
              <div className="flex gap-2 items-center">
                <span className="text-[#E1FF26]">
                  <PiStarFourFill />
                </span>
                <p className="opacity-55">{dynamicCreatorsCount}/10 Brands</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[#FF8E8E]">
                  <PiStarFourFill />
                </span>
                <p className="opacity-55">{dynamicBrandsCount}/10 Creators</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex-1">
        {/* Rendering the Pie chart with dynamic data */}
        <Pie data={data} options={options} className="opacity-55"/>

        <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-1">
          <span className="text-[45px] font-normal">{Math.round(totalAvailable)}%</span>
          <span className="text-[14px] font-normal opacity-55 mt-1">
            Bandwidth Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreatorPieChart;
