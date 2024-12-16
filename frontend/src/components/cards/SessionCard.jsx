import React, { useState } from "react";
import { ImBlocked } from "react-icons/im";
import {
  IoIosArrowRoundBack,
  IoMdArrowBack,
  IoMdArrowForward,
} from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import { TbAlertOctagon } from "react-icons/tb";
import ReactPlayer from "react-player";
import moment from "moment";
import SessionVideo from "../../assets/videos/review.webm";//video format change
import { useNavigate } from "react-router-dom";
import VisualDesign from "../../assets/images/visual-design.svg";
import UIDesign from "../../assets/images/UX&UI-design.svg";

const SessionCard = ({ creatorName, ongoingProject }) => {
  const [startDate, setStartDate] = useState(moment());
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const navigate = useNavigate();

  const handlePrevious = () => {
    setStartDate(startDate.clone().subtract(1, "days"));
  };

  const handleNext = () => {
    setStartDate(startDate.clone().add(1, "days"));
  };

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };
  const handleBackToProjects = () => {
    navigate(-1);
  };

  // Get first name from creatorName
  const firstName = creatorName.split(" ")[0];

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <section className="flex flex-col w-full pr-2 justify-between gap-4 max-h-[calc(100vh-150px)] overflow-y-auto custom-scrollbar scrollbar-md">
      <header className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 m-3 items-center">
            <div
              className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[45px] w-fit p-2 opacity-55 sm:h-[35px] sm:w-[35px] cursor-pointer"
              onClick={handleBackToProjects}
            >
              <IoIosArrowRoundBack size={30} />
            </div>
            <span>{`${firstName}'s Session`}</span>
          </div>
          <span className="opacity-55">Last Updated: 12 dec 2024</span>
        </div>
      </header>

      <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex w-fit h-[45px] p-3 text-[16px] font-normal opacity-55 gap-2 mx-3">
        <MdOutlineCalendarToday size={20} />
        <span className="py-2">Today</span>
      </div>

      <section>
        <div className="w-full h-fit opacity-55 flex gap-x-2 items-center font-thin">
          <IoMdArrowBack
            size={16}
            className="cursor-pointer basis-[5%]"
            onClick={handlePrevious}
          />
          <div className="flex justify-between items-center cursor-pointer basis-[90%]">
            {[0, 1, 2, 3, 4, 5].map((ele) => (
              <p
                key={ele}
                className="text-center bg-[#1A1A1A] rounded-xl text-wrap px-3 m-2"
              >
                {startDate.clone().add(ele, "days").format("MMM DD")}
              </p>
            ))}
          </div>
          <IoMdArrowForward
            size={16}
            className="cursor-pointer basis-[5%]"
            onClick={handleNext}
          />
        </div>

        <div className="flex flex-col w-full h-fit items-center justify-center p-4">
          <div className="overflow-hidden border-6 border rounded-3xl border-[#1f1f1f]">
            <ReactPlayer
              url={SessionVideo}
              className="object-cover"
              playing={true}
              controls={true}
              onProgress={handleProgress}
              onDuration={handleDuration}
              width="100%"
              height="auto"
            />
          </div>

          <div className="relative pt-5 w-full">
            <div className="w-full bg-[#121212] h-3 rounded-full">
              <div
                className="bg-[#1f1f1f] h-3 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <p className="flex justify-start items-center gap-x-2 text-center mt-2 text-[#ff8e8e]">
          <span>
            <TbAlertOctagon size={20} />
          </span>
          <span className="opacity-55">Violation detected</span>
        </p>
        <p className="flex justify-start items-center gap-x-2 text-center mt-2 text-[#ff8e8e] opacity-55">
          The surveillance system has detected violation in the platform.
        </p>

        <div className="flex gap-4 mt-5">
          <div className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-2 text-[16px] w-fit font-normal gap-2 justify-center mt-2">
            <img src={VisualDesign} alt="visual-design-icon" />
            <span className="py-2 opacity-55">Warn User</span>
          </div>
          <div className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-2 text-[16px] w-fit font-normal gap-2 justify-center mt-2">
            <img src={UIDesign} alt="UI/UX-design-icon" />
            <span className="py-2 opacity-55">Ignore</span>
          </div>
        </div>

        <div className="flex gap-1 items-center mt-10">
          <div className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-3 text-[16px] w-fit font-normal gap-2 justify-center mt-2">
            <ImBlocked size={20} className="text-[#FF8E8E]" />
            <span className="py-2 text-[#FF8E8E80]">Report & Blacklist</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SessionCard;
