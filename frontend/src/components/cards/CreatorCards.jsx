import CreatorImg from "../../assets/images/Mask group.svg";
import { GoDotFill } from "react-icons/go";
import Adidas from "../../assets/images/adidas.svg";
import Nike from "../../assets/images/nike.svg";
import HM from "../../assets/images/hm.svg";
import RatingStars from "../../assets/images/rating-stars.svg";
import { useNavigate } from "react-router-dom";

const CreatorCards = ({ id, creatorName, creatorCategory, setTabIndex }) => {
  const navigate = useNavigate();

  const handleSelectProject = (e) => {
    e.preventDefault();
    setTabIndex(0);
    navigate(`/you-team/creators?project=${id}`);
  };

  return (
    <div
      className="w-full h-fit p-4 bg-[#121212] border-[1px] border-transparent flex flex-col justify-between rounded-[26px] cursor-pointer transition-all duration-300 ease-linear"
      onClick={handleSelectProject}
    >
      <div className="flex justify-between w-full">
        <img src={CreatorImg} alt="creator-img" />
        <div className="bg-[#1A1A1A] items-center rounded-3xl flex h-[39px] w-[100px] p-2">
          <GoDotFill className="text-[#E1FF26]" size={20} />
          <p className="opacity-55">Available</p>
        </div>
      </div>

      <h1 className="text-[15px] font-normal my-5">{creatorName}</h1>

      <div className="flex items-center gap-3">
        <div
          className={`items-center rounded-xl text-center flex h-[25px] w-[110px] p-2 text-[11px] font-normal text-nowrap ${
            creatorCategory === "Pro Designer"
              ? "bg-gradient-to-r from-[#FFE67B] via-[#FF8E8E] to-[#7D22FF] bg-clip-text text-transparent opacity-100"
              : "opacity-55 bg-[#1a1a1a]"
          }`}
        >
          {creatorCategory}
        </div>
        <div className="bg-[#1A1A1A] items-center rounded-xl text-center flex h-[25px] w-[110px] p-2 text-[11px] font-normal opacity-55 text-nowrap">
          Full Time Freelancer
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="opacity-55 text-[11px] font-normal items-center my-2 p-2">
          Worked with :
        </span>
        <div className="flex gap-3">
          <img src={Adidas} alt="adidas-logo" height={25} width={25} />
          <img src={Nike} alt="nike-logo" height={25} width={25} />
          <img src={HM} alt="h&m-logo" height={25} width={25} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="opacity-55 text-[11px] font-normal items-center my-1 p-2">
          Average Rating :
        </span>
        <div className="flex gap-3">
          <img src={RatingStars} alt="rating-stars" height={100} width={100} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="opacity-55 text-[11px] font-normal items-center my-1 p-2">
          Total Project :
        </span>
        <span className="text-[11px] font-normal items-center my-1 py-2">
          12
        </span>
      </div>
    </div>
  );
};

export default CreatorCards;
