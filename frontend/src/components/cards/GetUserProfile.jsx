import React, { useState } from "react";
import CircleProgress from "../CircleProgressbar/CircleProgress";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { UserDOC_ITEMS } from "../../config";

const GetUserProfile = () => {
  const [percentage, setpercentage] = useState(35);
  const [toggleArrow, setToggleArrow] = useState(true);

  return (
    <div className="p-4 bg-[#050505] rounded-3xl flex flex-col justify-between">
      <div className="flex justify-between bg-[#1c1e1e] rounded-3xl p-3 m-[0.5px]">
        <div>
          <h1 className="text-3xl p-4">Hey Rupesh 👋</h1>
          <p className="text-sm p-4 text-[#FCFCD880]">
            Complete your profile to start gutting
            <br /> projects.
          </p>
        </div>
        <CircleProgress percentage={percentage} circleWidth="140" />
      </div>

      <ul className="p-4">
        <div className="flex justify-between">
          <div className="flex">
            <h3 className="text-2xl py-4 pl-4 text">Your action item</h3>
            <span className="w-[25px] h-[25px] m-5 flex justify-center items-center rounded-full bg-[#FF8E8E29]">
              <span className="text-[12px] font-semibold text-[#FF8E8E]">2</span>
            </span>
          </div>

          <div>
            {toggleArrow ? (
              <MdKeyboardArrowDown
                size={30}
                className="cursor-pointer mt-4"
                onClick={() => setToggleArrow(!toggleArrow)}
              />
            ) : (
              <MdKeyboardArrowUp
                size={30}
                className="cursor-pointer mt-4"
                onClick={() => setToggleArrow(!toggleArrow)}
              />
            )}
          </div>
        </div>

        {toggleArrow && (
          <div>
            {UserDOC_ITEMS.map((ele, index) => (
              <li key={index} className="py-1 text-sm">
                <div className="flex justify-between">
                  <div className="flex">
                    <img
                      src={ele.icon}
                      height={40}
                      width={40}
                      className="py-3 pl-4"
                    />
                    <h1 className="py-4 pl-4 flex justify-center items-start text-nowrap font-thin text-xl">
                      {ele.name}
                    </h1>
                  </div>
                  <img
                    src={ele.progress}
                    alt="progress"
                    className="w-[25px] h-[25px] my-5"
                  />
                </div>
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default GetUserProfile;
