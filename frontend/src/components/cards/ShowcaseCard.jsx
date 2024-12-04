import React from 'react';
import ShowcaseImg from "../../assets/images/showcase-img.svg";

const ShowcaseCard = () => {
  return (
    <div className="flex justify-between bg-[#181B1C] rounded-3xl overflow-hidden">
      <div 
        className="bg-no-repeat bg-contain bg-right-bottom h-full w-full" 
        style={{ backgroundImage: `url(${ShowcaseImg})` }}
      >
        <h1 className="text-2xl tracking-tight pr-44 pl-4 py-4 text-white text-nowrap">
          Showcase your
          <br />
          talent
        </h1>
      </div>
    </div>
  );
};

export default ShowcaseCard;
