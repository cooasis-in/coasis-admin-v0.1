import React from "react";
import TimelineCard from "./TimelineCard";
import CreatorImg from "../../assets/images/Mask group.svg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import Chip from "../clip/clip";
import moment from "moment";
import FileCard from "./FileCard";
import { useNavigate } from "react-router-dom";

const ProjectReportCard = ({
  projectId,
  category,
  creatorName,
  projectOverview,
  projectObjective,
  projectDuration,
  projectDeadline,
  projectStatus,
  files,
  tabIndex,
  setTabIndex,
}) => {
  const TABS_CONTENT = ["Overview", "Timeline", "Assets", "Files", "Reviews"];
  const navigate = useNavigate();
  const getInputFile = (e) => {
    e.preventDefault();
  };

  const handleBackToProjects = () => {
    navigate(-1);
  };
  return (
    <section className="flex flex-col w-full pr-2 justify-between gap-4 max-h-[calc(100vh-150px)] overflow-y-auto custom-scrollbar scrollbar-md">
      <div className="px-2">
        <header className="flex flex-col ">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 m-3 items-center">
              <div
                className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[45px] w-fit p-2 opacity-55 sm:h-[35px] sm:w-[35px] cursor-pointer"
                onClick={handleBackToProjects}
              >
                <IoIosArrowRoundBack size={30} />
              </div>
              <span>{ projectId?.projectName || "Food Website"}</span>
            </div>
            <span className="opacity-55">
              Last Updated : {projectId?.lastdate || "Sep 2, 2024"}
            </span>
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
        <div className="flex h-fit gap-x-10 pt-3 border-b-2 border-[#292929] ">
          {TABS_CONTENT.map((ele, ind) => (
            <p
              className={`font-thin text-lg cursor-pointer w-20 text-center  pb-2 mb-[1.5px] ${
                tabIndex === ind
                  ? "text-[#fcfcd8] opacity-100 shadow-[0_2px_0px_rgba(0,0,0,0.1)] shadow-white border-[#fcfcd8]"
                  : "opacity-55"
              }`}
              key={ind}
              onClick={() => setTabIndex(ind)}
            >
              {ele}
            </p>
          ))}
        </div>
        <div className="pt-4 w-full flex-1">
          {/**----------------------------- OVERVIEW SECTION -------------------------------------- */}
          {tabIndex === 0 && (
            <div className=" w-full h-full pr-2 overflow-y-auto custom-scrollbar scrollbar-sm">
              <div>
                <h5 className="text-lg">Project Overview</h5>
                <p className="text-[15px] opacity-55 font-thin  my-6 ">
                  {`${projectOverview}`}
                </p>
              </div>
              <div>
                <h5 className="text-lg ">Project Objective:</h5>
                <p className="text-[15px] opacity-55 font-thin mt-2">
                  {`${projectObjective}`}
                </p>
              </div>
              <button className="flex items-center bg-[#20201e] px-3 py-2 gap-x-2 text-xs border border-[#343432] rounded-full my-6">
                <FaRegEye /> View Brief
              </button>
              <div className="w-full p-7 bg-[#1b1a1a] rounded-xl text-[15px]">
                <div className="flex items-center gap-x-5">
                  <p>Project Duration: </p>
                  <p className="flex items-center gap-x-1">
                    <MdOutlineWatchLater size={15} className="text-[#e1ff26]" />{" "}
                    {projectDuration}
                  </p>
                  <div className="flex items-center gap-x-2">
                    <Chip
                      text={"2 Days Left"}
                      bgCol={"#e1ff26"}
                      textCol={"#014f59"}
                    />
                    <Chip text={"High"} bgCol={"#ffb2b2"} textCol={"#a93939"} />
                  </div>
                </div>
                <div className="flex items-center gap-x-5 my-5">
                  <p>Project Deadline: </p>
                  <p className="flex items-center gap-x-1">
                    <MdOutlineWatchLater size={15} className="text-[#e1ff26]" />{" "}
                    {moment(projectDeadline).format("Do MMMM, YYYY")}
                  </p>
                  <Chip
                    text={"Delayed"}
                    bgCol={"#ffb2b2"}
                    textCol={"#a93939"}
                  />
                </div>
                <div className="flex items-center gap-x-5">
                  <p>Status: </p>
                  <p
                    className={`text-[11px] px-3 py-1 rounded-full  ${
                      projectStatus === "Completed"
                        ? "text-white bg-green-600"
                        : "text-[#e1ff26] bg-[#3d3e3e]"
                    }`}
                  >
                    {projectStatus}
                  </p>
                  <Chip
                    text={projectStatus}
                    bgCol={
                      projectStatus === "Completed" ? "#049668" : "#3d3e3e"
                    }
                    textCol={
                      projectStatus === "Completed" ? "#ffffff" : "#e1ff26"
                    }
                  />
                  <p>Final Draft Shared. Working on feedback.</p>
                </div>
              </div>
            </div>
          )}

          {/**----------------------------- TIMELINE SECTION -------------------------------------- */}
          {tabIndex === 1 && (
            <>
              {/* <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
              /> */}
              <TimelineCard />
            </>
          )}

          {/**----------------------------- FILES SECTION -------------------------------------- */}
          {tabIndex === 2 && (
            <div className="w-full h-full flex flex-col-reverse">
              <div className="h-fit">
                <p className="opacity-55 font-thin">
                  Want to share more files with the designer ? Upload your
                  assets here !
                </p>
                <input
                  type="file"
                  hidden
                  id="fileInput"
                  onChange={getInputFile}
                />
                <div className="flex items-center justify-between w-[50%] p-3 py-2 mt-2 bg-[#0c0c0c] rounded-2xl">
                  <p className="opacity-55 font-thin">Upload more files</p>
                  <p
                    className="p-2 px-3 rounded-xl bg-[#161616]  text-[#e1ff26] cursor-pointer"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    Choose file
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex h-fit  items-center gap-x-2 ">
                  <h5 className="text-lg">Project Assets: </h5>
                  <p className=" bg-[#121212] text-xs px-2 py-0.5 rounded-full font-medium">
                    08
                  </p>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar scrollbar-sm my-3">
                  {files?.map((ele, ind) => (
                    <div className="w-1/2">
                      <FileCard
                        key={ind}
                        fileId={ind}
                        fileType={ele?.type}
                        fileName={ele?.name}
                        fileSize={ele?.size}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/**---------------------------- REVIEWS SECTION ------------------------------------- */}
          {tabIndex === 3 && (
            <div className="w-full h-full overflow-x-hidden overflow-y-auto custom-scrollbar scrollbar-sm  pr-2 flex flex-col gap-y-4"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectReportCard;
