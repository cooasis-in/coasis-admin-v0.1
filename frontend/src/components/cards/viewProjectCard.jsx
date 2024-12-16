import React, { useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoFolderOutline } from "react-icons/io5";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import CreatorImg from "../../assets/images/Mask group.svg";

const ViewProjectCard = ({ id, creatorName, ongoingProject, category }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleProjectReportClick = (projectId) => {
    navigate(
      `/your-team?creator=${id}&view-project=true&project-report=${projectId}`
    );
  };

  return (
    <section className="flex flex-col w-full pr-2 justify-between gap-4 max-h-[calc(100vh-150px)] overflow-y-auto custom-scrollbar scrollbar-md">
      <div className="flex flex-col w-full pr-8">
        <header>
          <div className="flex gap-x-5 items-center">
            <div
              className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[45px] w-fit p-2 opacity-55 sm:h-[35px] sm:w-[35px] cursor-pointer"
              onClick={handleBackClick}
            >
              <IoIosArrowRoundBack size={30} />
            </div>
            <span>Ongoing Projects</span>
          </div>
          <div className="flex m-3">
            <img src={CreatorImg} alt="creator-img" />
            <div className="flex flex-col justify-start">
              <div className="flex m-2">
                <h1 className="mx-3">{creatorName}</h1>
              </div>
              <div className="flex gap-3 m-3">
                <div
                  className={`items-center rounded-xl text-center flex h-[25px] w-fit p-3 text-[11px] font-normal text-nowrap ${
                    category === "Pro Designer"
                      ? "bg-gradient-to-r from-[#FFE67B] via-[#FF8E8E] to-[#7D22FF] bg-clip-text text-transparent opacity-100 border-2 border-slate-800"
                      : "opacity-55 bg-[#1a1a1a]"
                  }`}
                >
                  {category}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Loop through ongoing projects */}
        {ongoingProject.map((project) => (
          <div
            className="m-3 w-full p-4 bg-[#121212] rounded-xl"
            key={project.id}
          >
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[25px] px-6 text-[11px] text-[#A93939] font-normal text-nowrap">
                  High
                </div>
                <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[25px] px-6 text-[11px] text-[#FED405] font-normal text-nowrap">
                  Inprogress
                </div>
              </div>

              <div
                className="flex bg-[#1A1A1A] items-center rounded-xl text-center h-[45px] p-3 text-nowrap cursor-pointer"
                onClick={() => handleProjectReportClick(project.id)} // Pass the project ID here
              >
                <IoFolderOutline className="mx-2" />
                <span className="text-nowrap">Project Report</span>
              </div>
            </div>

            {/* Project details */}
            <h1 className="mt-2 text-[15px] font-normal text-nowrap">
              {project.projectName}
            </h1>
            <p className="mt-1 text-[15px] opacity-55 w-[250px]">
              {project.projectDescription}
            </p>

            {/* Project deadlines and brief */}
            <div className="flex gap-5">
              <div className="flex gap-3 items-center opacity-55 mt-2">
                <AiFillClockCircle size={20} />
                <span className="text-nowrap">{project.projectDeadline}</span>
              </div>
              <div className="flex gap-3 items-center mt-2">
                <BsLink size={20} className="text-[#E1FF26]" />
                <span className="text-nowrap opacity-55">Project Brief</span>
              </div>
            </div>

            {/* Project comments and files */}
            <div className="flex gap-5">
              <div className="flex gap-3 items-center opacity-55 mt-2">
                <LiaCommentDotsSolid size={20} />
                <span className="text-nowrap">11 Comments</span>
              </div>

              <div className="flex gap-3 items-center opacity-55 mt-2">
                <IoFolderOutline size={20} />
                <span className="text-nowrap">8 Files</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewProjectCard;
