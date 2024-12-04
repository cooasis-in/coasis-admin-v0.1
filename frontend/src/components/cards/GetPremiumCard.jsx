import { Link } from "react-router-dom";
import Avatar from "../avatar/avatar";
import { APP_URL } from "../../config";

const GetPremiumCard = () => {
  return (
    <div className=" py-4 px-10 bg-[#050505] rounded-3xl flex flex-col justify-between">
      <h1 className="text-[30px] tracking-tight text-nowrap">
      Join the community
      <br/>
       waitlist and grow
        <br/>
        your network.<span className="flex mt-1"><Avatar size={38} /></span>
      </h1>
      <Link  to={APP_URL.COMMUNITY}>
      <div className="w-fit rounded-2xl cursor-pointer bg-gradient-to-r from-[#FFE67B]  via-[#FF8E8E] to-[#7D22FF]  bg-clip-text text-transparent flex items-center gap-x-2 px-4 py-2 mt-5 bg-[#141414] border border-[#292929] ">
        <p>Join Community</p>
      </div>
      </Link>
    </div>
  );
};

export default GetPremiumCard;
