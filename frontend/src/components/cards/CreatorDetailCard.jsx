import { useState } from "react";
import { FaLinkedinIn, FaBehance, FaInstagram } from "react-icons/fa";
import { MdOutlinePersonAddAlt, MdOutlineWatchLater } from "react-icons/md";
import { PiEnvelope } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline, IoEarthOutline } from "react-icons/io5";
import { RiLetterSpacing2 } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { IoFolderOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import CreatorImg from "../../assets/images/Mask group.svg";
import CreatorRating from "../../assets/images/rating-stars.svg";
import VisualDesign from "../../assets/images/visual-design.svg";
import UIDesign from "../../assets/images/UX&UI-design.svg";
import TimelineCard from "./TimelineCard";
import moment from "moment";
import Chip from "../clip/clip";
import { FaRegEye } from "react-icons/fa6";
import DraftDetailsCard from "./DraftDetailsCard";
import FileCard from "./FileCard";

const CreatorDetailCard = ({
  brand,
  category,
  lastUpdated,
  projectName,
  projectOverview,
  projectObjective,
  projectDuration,
  projectDeadline,
  projectStatus,
  files,
  reviews,
  projectId,
  tabIndex,
  setTabIndex,
}) => {
  const [viewProjects, setViewProjects] = useState(false);
  const [projectReport, setProjectReport] = useState(false);

  const skills = ["Product Design", "Prototyping", "Design Thinking"];
  const TABS_CONTENT = ["Overview", "Timeline", "Assets", "Files", "Reviews"];

  // Array of ongoing projects
  const ongoingProject = [
    {
      id: 1, // Unique identifier for each project
      projectName: "Food Website",
      projectDescription:
        "Made stunning food website design called foodworld design",
      projectDeadline: "Sep 2, 2024",
    },
    {
      id: 2,
      projectName: "Food Website",
      projectDescription:
        "Made stunning food website design called foodworld design",
      projectDeadline: "Sep 2, 2024",
    },
    {
      id: 3,
      projectName: "Food Website",
      projectDescription:
        "Made stunning food website design called foodworld design",
      projectDeadline: "Sep 2, 2024",
    },
  ];

  const getInputFile = (e) => {
    e.preventDefault();
    console.log("Files", e.target.files[0]);
  };

  const handleViewProjectsClick = () => {
    setViewProjects(!viewProjects);
  };

  const handleBackClick = () => {
    setViewProjects(!viewProjects);
  };

  const handleProjectReportClick = () => {
    setProjectReport(!projectReport);
  };

  const handleBackToProjects = () => {
    setProjectReport(!projectReport);
  };

  return (
    <section className="flex flex-col p-4">
      {/* Conditionally render content based on viewProjects */}
      {!viewProjects && (
        <>
          {/* Header section with creator's image, name, and social links */}
          <div className="flex justify-between w-full">
            <div className="flex">
              <img src={CreatorImg} alt="creator-img" />
              <div className="flex flex-col justify-start">
                <div className="flex m-2">
                  <h1 className="mx-3">Sarah Miller</h1>
                  <div className="flex">
                    <FaLinkedinIn className="opacity-55 mx-2 my-1" />
                    <FaBehance className="opacity-55 mx-2 my-1" />
                    <FaInstagram className="opacity-55 mx-2 my-1" />
                  </div>
                </div>
                <div className="flex gap-3 m-3">
                  <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[25px] w-[110px] p-2 text-[11px] font-normal opacity-55 text-nowrap">
                    {category}
                  </div>
                  <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[25px] w-[110px] p-2 text-[11px] font-normal opacity-55 text-nowrap">
                    Full Time Freelancer
                  </div>
                </div>
              </div>
            </div>

            {/* Button for assigning the creator */}
            <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex w-[100px] h-[45px] p-2 text-[16px] font-normal opacity-55 mx-20 gap-2">
              <MdOutlinePersonAddAlt size={20} />
              <span className="py-2">Assign</span>
            </div>
          </div>

          {/* Contact Information section */}
          <div className="flex justify-between mt-5 mb-2 ">
            <span>Contact Information</span>
            <span className="opacity-55">Last updated : 1 Dec, 2024</span>
          </div>
          <div>
            <div className="flex opacity-55 gap-5 items-center my-2">
              <PiEnvelope size={20} />
              <span>Sarah.miller@example.com</span>
            </div>
            <div className="flex opacity-55 gap-5 items-center my-2">
              <MdOutlinePhone size={20} />
              <span>+1 (555) 234- 5678</span>
            </div>
            <div className="flex opacity-55 gap-5 items-center my-2">
              <IoLocationOutline size={20} />
              <span>New York, NY</span>
            </div>
            <div className="flex opacity-55 gap-5 items-center my-2">
              <IoEarthOutline size={20} />
              <span>EST</span>
            </div>
            <div className="flex opacity-55 gap-5 items-center my-2">
              <RiLetterSpacing2 size={20} />
              <span>English, Hindi</span>
            </div>
          </div>

          {/* Projects section */}
          <div className="flex justify-between mt-5 mb-2 ">
            <div>
              {/* Total Projects, Ongoing, and Unsuccessful Projects */}
              <div className="text-[15px] font-light flex gap-2">
                <span className="opacity-55">Total Projects delivered:</span>
                <span>23</span>{" "}
                <span className="text-[#e1ff26]">+2 this month</span>
              </div>
              <div className="text-[15px] font-light flex gap-2">
                <span className="opacity-55">Ongoing Projects:</span>
                <span>03</span>{" "}
                <span className="text-[#e1ff26]">+1 this month</span>
              </div>
              <div className="text-[15px] font-light flex gap-2">
                <span className="opacity-55">Unsuccessful Projects:</span>
                <span>05</span>{" "}
              </div>
              {/* Button to toggle ongoing projects */}
              <div
                className="bg-[#1A1A1A] items-center rounded-xl text-center flex w-[150px] h-[40px] p-2 text-[16px] font-normal gap-2 justify-center mt-2 cursor-pointer"
                onClick={handleViewProjectsClick}
              >
                <span className="py-2">View Projects</span>
              </div>
            </div>

            {/* Rating section */}
            <div>
              <span className="font-light text-[20px]">95%</span>
              <br />
              <span className="font-light text-[15px]">on time delivery</span>
              <br />
              <span className="font-normal text-[15px] opacity-55 mt-5 mb-1">
                Average Rating
              </span>
              <img src={CreatorRating} alt="creator-rating" />
            </div>
          </div>

          {/* Area of expertise */}
          <div className="flex mt-5 mb-2">
            <span>Area of expertise</span>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-2 text-[16px] w-[150px] font-normal gap-2 justify-center mt-2">
              <img src={VisualDesign} alt="visual-design-icon" />
              <span className="py-2 opacity-55">Visual Design</span>
            </div>
            <div className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-2 text-[16px] w-[150px] font-normal gap-2 justify-center mt-2">
              <img src={UIDesign} alt="UI/UX-design-icon" />
              <span className="py-2 opacity-55">UX/UI Design</span>
            </div>
          </div>

          {/* Skills section */}
          <div className="flex mt-5 mb-2">
            <span>Skills</span>
          </div>
          <div className="flex gap-4">
            {skills.map((skill, i) => (
              <div
                className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-2 text-[16px] w-[150px] font-normal gap-2 justify-center mt-2"
                key={i} // Use 'key' for proper rendering of lists
              >
                <span className="py-2 opacity-55">{skill}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Display ongoing projects if viewProjects is true */}
      {viewProjects && (
        <>
          <div className="flex flex-col w-full">
            <div className="flex gap-3 m-3 items-center">
              <div
                className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[45px] w-[45px] p-2 opacity-55 sm:h-[35px] sm:w-[35px] cursor-pointer"
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
                  <h1 className="mx-3">{}</h1>
                </div>
                <div className="flex gap-3 m-3">
                  <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[25px] w-[110px] p-2 text-[11px] font-normal opacity-55 text-nowrap">
                    {category}
                  </div>
                </div>
              </div>
            </div>

            {/* Loop through ongoing projects */}
            {ongoingProject.map((project) => (
              <div
                className="m-3 w-full p-4 bg-[#121212] rounded-2xl"
                key={project.id} // Unique key for each project
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

                  <div className="flex bg-[#1A1A1A] items-center rounded-xl text-center h-[45px] p-2 text-nowrap cursor-pointer">
                    <IoFolderOutline
                      className="mx-2"
                      onClick={handleProjectReportClick}
                    />
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
                    <span className="text-nowrap">
                      {project.projectDeadline}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center mt-2">
                    <BsLink size={20} className="text-[#E1FF26]" />
                    <span className="text-nowrap opacity-55">
                      Project Brief
                    </span>
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
        </>
      )}
      {projectReport && (
        <>
          <div className="flex flex-col">
            <div className="flex gap-3 m-3 items-center">
              <div
                className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[45px] w-[45px] p-2 opacity-55 sm:h-[35px] sm:w-[35px] cursor-pointer"
                onClick={handleBackToProjects}
              >
                <IoIosArrowRoundBack size={30} />
              </div>
              <span>Ongoing Projects</span>
            </div>
            <div className="flex m-3">
              <img src={CreatorImg} alt="creator-img" />
              <div className="flex flex-col justify-start">
                <div className="flex m-2">
                  <h1 className="mx-3">Sarah Miller</h1>
                </div>
                <div className="flex gap-3 m-3">
                  <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[25px] w-[110px] p-2 text-[11px] font-normal opacity-55 text-nowrap">
                    {category}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-fit gap-x-10 pt-6 border-b-2 border-[#292929]">
            {TABS_CONTENT.map((ele, ind) => (
              <p
                className={`font-thin text-lg cursor-pointer w-20 text-center  pb-2 mb-[1.5px] ${
                  tabIndex === ind
                    ? "text-[#e1ff26] opacity-100 border-b-2 border-[#e1ff26]"
                    : "opacity-55"
                }`}
                onClick={() => setTabIndex(ind)}
              >
                {ele}
              </p>
            ))}
          </div>
          <div className="pt-4 w-full flex-1 overflow-hidden">
            {/**----------------------------- OVERVIEW SECTION -------------------------------------- */}
            {tabIndex === 0 && (
              <div className=" w-full h-full pr-2 overflow-y-auto custom-scrollbar scrollbar-sm">
                {/* <div>
                  <h5 className="text-lg">Project Overview</h5>
                  <p className="text-[15px] opacity-55 font-thin  my-6 ">
                    {`${projectOverview}`}
                  </p>
                </div> */}
                <div>
                  <h5 className="text-lg ">Project Objective:</h5>
                  {/* <p className="text-[15px] opacity-55 font-thin mt-2">
                    {`${projectObjective}`}
                  </p> */}
                </div>
                <button className="flex items-center bg-[#20201e] px-3 py-2 gap-x-2 text-xs border border-[#343432] rounded-full my-6">
                  <FaRegEye /> View Brief
                </button>
                <div className="w-full p-7 bg-[#1b1a1a] rounded-xl text-[15px]">
                  <div className="flex items-center gap-x-5">
                    <p>Project Duration: </p>
                    <p className="flex items-center gap-x-1">
                      <MdOutlineWatchLater
                        size={15}
                        className="text-[#e1ff26]"
                      />{" "}
                      {projectDuration}
                    </p>
                    <div className="flex items-center gap-x-2">
                      <Chip
                        text={"2 Days Left"}
                        bgCol={"#e1ff26"}
                        textCol={"#014f59"}
                      />
                      <Chip
                        text={"High"}
                        bgCol={"#ffb2b2"}
                        textCol={"#a93939"}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-x-5 my-5">
                    <p>Project Deadline: </p>
                    <p className="flex items-center gap-x-1">
                      <MdOutlineWatchLater
                        size={15}
                        className="text-[#e1ff26]"
                      />{" "}
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
                    {/* <p
                    className={`text-[11px] px-3 py-1 rounded-full  ${
                      projectStatus === "Completed"
                        ? "text-white bg-green-600"
                        : "text-[#e1ff26] bg-[#3d3e3e]"
                    }`}
                  >
                    {projectStatus}
                  </p> */}
                    {/* <Chip
                      text={projectStatus}
                      bgCol={
                        projectStatus === "Completed" ? "#049668" : "#3d3e3e"
                      }
                      textCol={
                        projectStatus === "Completed" ? "#ffffff" : "#e1ff26"
                      }
                    /> */}
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
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
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
              <div className="w-full h-full overflow-x-hidden overflow-y-auto custom-scrollbar scrollbar-sm  pr-2 flex flex-col gap-y-4">
                {reviews?.map((ele) => (
                  <DraftDetailsCard
                    key={ele}
                    draftName={`Draft ${ele}`}
                    projectName={"Illustration Design"}
                    projectId={projectId}
                    draftId={ele}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default CreatorDetailCard;
