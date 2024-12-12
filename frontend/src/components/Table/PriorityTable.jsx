import { useState, useEffect } from "react";
import { APP_URL, ProjectList } from "../../config";
import { useLocation } from "react-router-dom";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

const PriorityTable = ({
  currentPage,
  itemsPerPage,
  filteredProjects = [],
}) => {
  const location = useLocation();
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [actionStatusMenuIndex, setActionStatusMenuIndex] = useState(null);

  // Pagination logic
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const baseHeaders = [
    "Customer Details",
    "Resource",
    "Assigned to",
    "Timeline",
    "Impact",
    location?.pathname?.includes("closed-projects") ? "Action" : "Status",
  ];

  // Toggle visibility of menu
  const toggleMenu = (index) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const toggleStatusMenu = (index) => {
    setActionStatusMenuIndex(actionStatusMenuIndex === index ? null : index);
  };

  const closeDropdowns = (e) => {
    if (
      !e.target.closest(".dropdown-menu") &&
      !e.target.closest(".dropdown-icon")
    ) {
      setActiveMenuIndex(null);
      setActionStatusMenuIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  return (
    <div className="bg-[#121212] flex flex-col justify-between p-4 rounded-2xl w-full h-[100%] overflow-y-auto custom-scrollbar scrollbar-md">
      <table className="min-w-full table-auto rounded-lg">
        <thead>
          <tr className="text-white opacity-80 text-sm bg-[#151515] p-3 rounded-3xl mb-4">
            {baseHeaders.map((header, index) => (
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
              <td className="px-4 py-2">
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
                  <span
                    className="cursor-pointer absolute right-3 dropdown-icon"
                    onClick={() => toggleMenu(index)}
                  >
                    <PiDotsThreeOutlineVerticalFill size={20} />
                    {activeMenuIndex === index && (
                      <div className="absolute top-[40px] right-0 bg-[#2c2c2c] rounded-lg shadow-lg p-1 w-[120px] bg-opacity-90 translate-y-0 z-50 dropdown-menu">
                        <ul className="text-white text-sm font-thin">
                          <li className="py-2 px-4 hover:bg-[#454545] cursor-pointer">
                            Chat
                          </li>
                          <hr />
                          <li className="py-2 px-4 hover:bg-[#454545] cursor-pointer">
                            Reassign
                          </li>
                        </ul>
                      </div>
                    )}
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
                <div className="flex bg-[#191919] items-center rounded-xl appearance-none relative">
                  {location?.pathname?.includes("closed-projects") ? (
                    <div
                      className={`bg-[#191919] p-3 rounded-xl appearance-none items-center flex justify-center w-full cursor-pointer ${
                        project?.projectStatus === "Cancelled" &&
                        "text-[#ac5858]"
                      } ${
                        project?.projectStatus === "Completed" &&
                        "text-[#4E8B6E]"
                      }`}
                    >
                      {project?.projectStatus}
                    </div>
                  ) : (
                    <div>
                      <div
                        className={`bg-[#191919] py-3 px-3 pr-6 rounded-xl appearance-none w-full cursor-pointer ${
                          project?.priorityLabel === "High" && "text-[#ac5858]"
                        } ${
                          project?.priorityLabel === "Low" && "text-[#4E8B6E]"
                        } ${
                          project?.priorityLabel === "Medium" &&
                          "text-[#9B8E4D]"
                        }`}
                      >
                        {project?.priorityLabel}
                      </div>
                      <span
                        className="cursor-pointer absolute right-1 top-3 dropdown-icon"
                        onClick={() => toggleStatusMenu(index)}
                      >
                        <PiDotsThreeOutlineVerticalFill size={20} />
                        {actionStatusMenuIndex === index && (
                          <div className="absolute top-[40px] right-0 bg-[#2c2c2c] rounded-lg shadow-lg p-1 w-[120px] bg-opacity-90 translate-y-0 z-50 dropdown-menu">
                            <ul className="text-white text-sm font-thin">
                              <li className="py-2 px-4 hover:bg-[#454545] cursor-pointer">
                                Escalate
                              </li>
                            </ul>
                          </div>
                        )}
                      </span>
                    </div>
                  )}
                </div>
              </td>
              <td className="px-4 py-2">
                {location?.pathname?.includes("closed-projects") ? (
                  <span className="font-thin text-b">{project.action}</span>
                ) : (
                  <div className="relative inline-block">
                    <select className="bg-[#191919] py-3 px-3 pr-8 rounded-xl appearance-none w-full cursor-pointer text-[#4E8B6E]">
                      <option>1st Draft</option>
                    </select>
                    <span className="absolute inset-y-0 right-3 top-1 flex items-center pointer-events-none text-[#4E8B6E]">
                      <MdKeyboardArrowDown size={20} />
                    </span>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriorityTable;
