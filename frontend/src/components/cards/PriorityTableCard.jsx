import { useState } from "react";
import { ProjectList } from "../../config";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import SelectPriorityTable from "../Table/SelectPriorityTable";

const TableHeader = [
  "Customer Details",
  "Resource",
  "Assigned to",
  "Timeline",
  "Impact",
  "Status",
];

const PriorityTableCard = ({ currentPage, itemsPerPage }) => {
  const [filteredProjects, setFilteredProjects] = useState(ProjectList);
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div className="bg-[#121212] flex flex-col justify-between p-4 rounded-2xl w-full h-[100%] overflow-y-auto custom-scrollbar scrollbar-md">
      <table className="min-w-full table-auto rounded-lg">
        <thead className="">
          <tr className="text-white opacity-80 text-sm bg-[#151515] p-3 rounded-3xl mb-4">
            {TableHeader.map((header, index) => (
              <th
                className="px-4 py-2 text-left font-thin items-center flex-row justify-center"
                key={index}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="mt-4">
          {currentProjects.map((project, index) => (
            <tr key={index} className="items-center">
              <td className="p-2 flex justify-between w-[200px]">
                <div className="flex flex-col">
                  <span className="font-thin text-[#454545]">
                    {project.label1}
                  </span>
                  <span className="font-thin">{project.BrandName}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-thin text-[#454545]">
                    {project.label4}
                  </span>
                  <span className="font-thin">{project.representer}</span>
                </div>
              </td>
              <td className="px-4 py-2 ">
                <div className="flex items-center w-[173px] h-[49px] bg-[#191919] rounded-xl appearance-none relative p-2">
                  <LuFileSpreadsheet className="opacity-50 mr-2" size={20} />
                  <span className="font-thin p-1">Project Report</span>
                  <span className="pointer-events-none absolute right-2">
                    <PiDotsThreeOutlineVerticalFill size={20} />
                  </span>
                </div>
              </td>
              <td className="p-2">
                <div className="flex bg-[#191919] items-center rounded-xl appearance-none relative mr-7 w-[173px] h-[49px]">
                  <img
                    src={project.DesignerImg}
                    alt="Designer Image"
                    className="rounded-full m-2"
                  />
                  <span className="font-thin">{project.designerName}</span>
                  <span className="pointer-events-none absolute right-3">
                    <PiDotsThreeOutlineVerticalFill size={20} />
                  </span>
                </div>
              </td>

              <td className="p-2">
                <div className="flex flex-col">
                  <span className="font-thin text-[#454545]">
                    {project.label3}
                  </span>
                  <span className="font-thin">{project.deadline}</span>
                </div>
              </td>
              <td className="p-2">
                <SelectPriorityTable priority={project.priorityLabel} />
              </td>
              <td className="px-4 py-2">
                <div className="relative inline-block">
                  <select
                    className="bg-[#191919] py-3 px-3 pr-8 rounded-xl appearance-none w-full cursor-pointer text-[#4E8B6E]"
                  >
                    <option>1st Draft</option>
                  </select>
                  <span className="absolute inset-y-0 right-3 top-1 flex items-center pointer-events-none text-[#4E8B6E]">
                    <MdKeyboardArrowDown size={20} />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriorityTableCard;
