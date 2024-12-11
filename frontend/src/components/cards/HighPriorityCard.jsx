import { MdPersonAddAlt } from "react-icons/md";
import { PiChats, PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { GiElectric } from "react-icons/gi";
import { ProjectList } from "../../config";

const HighPriorityCard = () => {
  const filteredProjects = ProjectList.filter(project => project.priorityLabel === "High");

  return (
    <div className="bg-[#121212] flex flex-col justify-evenly m-4 p-4 rounded-2xl">
      <h3 className="text-lg text-white mb-4">High Priority Tasks</h3>
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
          <div className="flex bg-[#191919] items-center rounded-xl appearance-none relative mr-7">
            <div
              className={`bg-[#191919] py-3 px-3 pr-6 mr-8 rounded-xl appearance-none w-full cursor-pointer ${
                project.priorityLabel === "High" && "text-[#ac5858]"
              }
                    ${project.priorityLabel === "Low" && "text-[#4E8B6E]"}
                    ${project.priorityLabel === "Medium" && "text-[#9B8E4D]"}`}
            >
              {project.priorityLabel}
            </div>
            <span className="pointer-events-none absolute right-1">
              <PiDotsThreeOutlineVerticalFill size={20} />
            </span>
          </div>
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
