import { useState } from "react";
import { MdPersonAddAlt } from "react-icons/md";
import { PiChats } from "react-icons/pi";
import { GiElectric } from "react-icons/gi";
import { ProjectList } from "../../config";
import SelectPriorityTable from "../Table/SelectPriorityTable";

const HighPriorityCard = () => {
  const [filteredProjects, setFilteredProjects] = useState(ProjectList);


  return (
    <div className="bg-[#121212] flex flex-col justify-evenly m-4 p-4 rounded-2xl">
      <h3 className="text-lg text-white mb-4">High priority Tasks</h3>
      {filteredProjects.slice(0, 3).map((project, index) => (
        <div
          key={index}
          className="p-2 mx-2 flex h-[70%] overflow-y-auto pr-2 custom-scrollbar scrollbar-sm"
        >
          <div className="flex items-center flex-col mb-1 mr-7">
            <span className="font-thin text-[#454545]">{project.label1}</span>
            <span className="font-thin">{project.BrandName}</span>
          </div>
          <div className="flex items-center flex-col mb-1 mr-7">
            <span className="font-thin text-[#454545]">{project.label2}</span>
            <span className="font-thin">{project.designerName}</span>
          </div>
          <div className="flex items-center flex-col mb-1 mr-7">
            <span className="font-thin text-[#454545]">{project.label3}</span>
            <span className="font-thin">{project.deadline}</span>
          </div>
          <SelectPriorityTable priority={project.priorityLabel} />
          <div className="flex items-center gap-[10px]">
            <MdPersonAddAlt
              size={25}
              className="text-[#454545] mr-7 cursor-pointer"
            />
            <PiChats size={25} className="text-[#454545] mr-7 cursor-pointer" />
            <GiElectric size={25} className="text-[#454545] cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighPriorityCard;
