import { FaLinkedinIn, FaBehance, FaInstagram } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { LuTvMinimalPlay } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { ImBlocked } from "react-icons/im";
import CreatorImg from "../../assets/images/Mask group.svg";
import CreatorRating from "../../assets/images/rating-stars.svg";
import VisualDesign from "../../assets/images/visual-design.svg";
import UIDesign from "../../assets/images/UX&UI-design.svg";
import { useNavigate } from "react-router-dom";
const CreatorDetailCard = ({
  id,
  category,
  creatorName,
  creatorInfo,
  creatorSkills,
}) => {
  const navigate = useNavigate();

  const handleViewProjectsClick = () => {
    navigate(`/your-team?creator=${id}&view-project=${true} `);
  };
  const handleSessionsClick = () => {
    navigate(`/your-team?creator=${id}&sessions=${true}`);
  };

  return (
    <section className="flex flex-col w-full pr-2 justify-between gap-4 max-h-[calc(100vh-150px)] overflow-y-auto custom-scrollbar scrollbar-md">
      <div className="pr-6">
        {/* Header section with creator's image, name, and social links */}
        <header className="flex justify-between w-full">
          <div className="flex">
            <img src={CreatorImg} alt="creator-img" />
            <div className="flex flex-col justify-start">
              <div className="flex m-2">
                <h1 className="mx-3">{creatorName}</h1>
                <div className="flex">
                  <FaLinkedinIn className="opacity-55 mx-2 my-1" />
                  <FaBehance className="opacity-55 mx-2 my-1" />
                  <FaInstagram className="opacity-55 mx-2 my-1" />
                </div>
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
                <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[25px] w-[fit] p-3 text-[11px] font-normal opacity-55 text-nowrap">
                  Full Time Freelancer
                </div>
              </div>
            </div>
          </div>

          {/* Button for assigning the creator */}
          <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex w-fit h-[45px] p-3 text-[16px] font-normal opacity-55 mx-5 gap-2">
            <MdOutlinePersonAddAlt size={20} />
            <span className="py-2">Assign</span>
          </div>
        </header>

        {/* Contact Information section */}
        <div className="flex justify-between mt-5 mb-2 ">
          <span>Contact Information</span>
          <span className="opacity-55">Last updated : 1 Dec, 2024</span>
        </div>
        <div>
          {creatorInfo.map((item, index) => (
            <div
              className="flex opacity-55 gap-5 items-center my-2"
              key={index}
            >
              <item.icon size={20} />
              <span>{item.value}</span>
            </div>
          ))}
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
              className="bg-[#1A1A1A] items-center rounded-xl text-center flex w-fit h-[40px] p-3 text-[16px] font-normal gap-2 justify-center mt-2 cursor-pointer"
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
          <div className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-2 text-[16px] w-fit font-normal gap-2 justify-center mt-2">
            <img src={VisualDesign} alt="visual-design-icon" />
            <span className="py-2 opacity-55">Visual Design</span>
          </div>
          <div className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-2 text-[16px] w-fit font-normal gap-2 justify-center mt-2">
            <img src={UIDesign} alt="UI/UX-design-icon" />
            <span className="py-2 opacity-55">UX/UI Design</span>
          </div>
        </div>

        {/* Skills section */}
        <div className="flex mt-5 mb-2">
          <span>Skills</span>
        </div>
        <div className="flex gap-4">
          {creatorSkills.map((skill, i) => (
            <div
              className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-3 text-[16px] w-fit font-normal gap-2 justify-center mt-2"
              key={i}
            >
              <span className="py-2 opacity-55">{skill}</span>
            </div>
          ))}
        </div>

        {/* Actions section */}
        <div className="flex mt-5 mb-2">
          <span>Actions</span>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <div
              className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-3 text-[16px] w-fit font-normal gap-2 justify-center mt-2 cursor-pointer"
              onClick={handleSessionsClick}
            >
              <LuTvMinimalPlay size={20} />
              <span className="py-2 opacity-55">Sessions</span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-3 text-[16px] w-fit font-normal gap-2 justify-center mt-2 cursor-pointer">
              <TiMessages size={20} />
              <span className="py-2 opacity-55">Message</span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="bg-[#1A1A1A] items-center rounded-xl flex h-[40px] p-3 text-[16px] w-fit font-normal gap-2 justify-center mt-2 cursor-pointer">
              <ImBlocked size={20} className="text-[#FF8E8E]" />
              <span className="py-2 text-[#FF8E8E80]">Report & Blacklist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CreatorDetailCard;
