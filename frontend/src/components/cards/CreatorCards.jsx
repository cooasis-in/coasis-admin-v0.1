import React, { useEffect, useRef } from "react";
import CreatorImg from "../../assets/images/Mask group.svg";
import { GoDotFill } from "react-icons/go";
import Adidas from "../../assets/images/adidas.svg";
import Nike from "../../assets/images/nike.svg";
import HM from "../../assets/images/hm.svg";
import RatingStars from "../../assets/images/rating-stars.svg";
import { useLocation, useNavigate } from "react-router-dom";

const CreatorCards = ({
  id,
  creatorName,
  creatorCategory,
  setTabIndex,
  selectedCreator,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cardRef = useRef(null);

  const handleSelectCreator = (e) => {
    e.preventDefault();
    setTabIndex(0);
    navigate(`/your-team?creator=${id}`);
  };

  useEffect(() => {
    if (selectedCreator === id && pathname?.includes("your-team")) {
      cardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedCreator, id, pathname]);

  return (
    <div
      className={`w-full h-fit p-4 relative ${
        pathname.includes("you-team") && selectedCreator === id
          ? "bg-[#050505] border-[#FCFCD81A]"
          : "bg-[#121212] border-transparent"
      } rounded-[26px] cursor-pointer transition-all`}
      onClick={handleSelectCreator}
    >
      <div ref={cardRef}>
        <div className="flex justify-between w-full">
          <img src={CreatorImg} alt="creator-img" />
          <div className="bg-[#1A1A1A] items-center rounded-3xl flex h-[39px] p-2">
            <GoDotFill className="text-[#E1FF26]" size={20} />
            <p className="opacity-55">Available</p>
          </div>
        </div>
        <h1 className="text-[15px] font-normal my-5">
          {creatorName || "Unknown Creator"}
        </h1>
        <div className="flex items-center gap-3 mb-5">
          <div
            className={`items-center rounded-xl text-center flex h-[25px] p-3 text-[11px] font-normal text-nowrap ${
              creatorCategory === "Pro Designer"
                ? "bg-gradient-to-r from-[#FFE67B] via-[#FF8E8E] to-[#7D22FF] bg-clip-text text-transparent opacity-100 border-2 border-slate-800"
                : "opacity-55 bg-[#1a1a1a]"
            }`}
          >
            {creatorCategory || "No Category"}
          </div>
          <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[25px] p-3 text-[11px] font-normal opacity-55 text-nowrap">
            Full Time Freelancer
          </div>
        </div>

        <div className="flex items-center gap-3 gap-y-1">
          <span className="opacity-55 text-[11px] font-normal">
            Worked with :
          </span>
          <div className="flex gap-3">
            <img src={Adidas} alt="adidas-logo" height={25} width={25} />
            <img src={Nike} alt="nike-logo" height={25} width={25} />
            <img src={HM} alt="h&m-logo" height={25} width={25} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="opacity-55 text-[11px] font-normal">
            Average Rating :
          </span>
          <div className="flex gap-3">
            <img
              src={RatingStars}
              alt="rating-stars"
              height={100}
              width={100}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="opacity-55 text-[11px] font-normal">
            Total Project :
          </span>
          <span className="text-[11px] font-normal">{12}</span>
        </div>

        {pathname.includes("your-team") && selectedCreator === id && (
          <div
            className="w-[1px] h-[60%] absolute right-0 top-1/2 -translate-y-1/2 transition-all"
            style={{
              background:
                "linear-gradient(180deg, rgba(252, 252, 216, 0) 0%, #fcfcd8 50%, rgba(252, 252, 216, 0) 100%)",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default CreatorCards;
