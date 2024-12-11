import { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { ProjectList } from "../../config";
import RecentActivityCard from "../../components/cards/RecentActivityCard";
import HighPriorityCard from "../../components/cards/HighPriorityCard";
import PriorityTableCard from "../../components/Table/PriorityTable";

const projectStatus = ["1 Week", "30 Days", "3 Months"];
const OverallProjects = [
  { count: "45", status: "Upcoming", pendency: "2" },
  { count: "10", status: "Ongoing", pendency: "1" },
  { count: "03", status: "Overdue", pendency: "2" },
  { count: "32", status: "Completed", pendency: "1" },
];

const Home = () => {
  const itemsPerPage = 5;
  const [filteredProjects, setFilteredProjects] = useState(ProjectList);

  const handleFilter = (e) => {
    e.preventDefault();
    const selectedPriority = e.target.value;
    setFilteredProjects(
      ProjectList?.filter(
        (ele) =>
          ele?.priorityLabel === selectedPriority || selectedPriority === "All"
      )
    );
  };

  return (
    <DashboardLayout>
      <div className="w-full h-[100%] p-4 gap-4 overflow-y-auto custom-scrollbar scrollbar-md">
        {/* -----------overview--------- */}
        <div className="flex justify-between items-center m-4">
          <h1 className="text-normal font-normal">Overview </h1>
          <div className="relative inline-block ">
            <select
              onChange={handleFilter}
              className="bg-[#121212] py-2 px- pl-3 pr-8 rounded-xl appearance-none w-full cursor-pointer"
            >
              <option value="All">All</option>{" "}
              {/* Add All option for no filter */}
              {projectStatus.map((ele) => (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-4 top-1 flex items-center pointer-events-none ">
              <MdKeyboardArrowDown size={20} />
            </span>
          </div>
        </div>
        <div className="h-fit bg-inherit  flex justify-between">
          {OverallProjects.map((ele) => (
            <div className="basis-[22%] px-4 py-3 mx-3 bg-[#121212] rounded-[24px] flex flex-col ">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h2 className="text-[45px] mr-4">{ele.count}</h2>
                  <p className="text-[15px] opacity-55 font-thin ">
                    {ele.status} <br />
                    Tasks
                  </p>
                </div>
                <PiDotsThreeOutlineVerticalFill className="cursor-pointer opacity-55 font-thin" />
              </div>
              <p className="font-thin">
                <span className="text-[#E1FF26]">+{ele.pendency}</span> this
                week
              </p>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="basis-[50%]">
            <RecentActivityCard />
          </div>
          <div className="basis-[50%]">
            <HighPriorityCard />
          </div>
        </div>

        {/* -----------Action Tasks--------- */}
        <div className="flex justify-between items-center m-4">
          <h1 className="text-normal font-normal">Action Tasks </h1>
          <div className="relative inline-block ">
            <select
              onChange={handleFilter}
              className="bg-[#121212] py-2 px-3 pr-8 rounded-xl appearance-none w-full cursor-pointer"
            >
              <option value="All">All</option>
              {projectStatus.map((ele) => (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
            <span className="absolute inset-y-0 right-4 top-1 flex items-center pointer-events-none ">
              <MdKeyboardArrowDown size={20} />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center m-4">
          <PriorityTableCard
            currentPage={1}
            itemsPerPage={itemsPerPage}
            filteredProjects={filteredProjects}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
