import React from "react";
import { premiumCardAvatar } from "../../config";

const Avatar = ({ size, border }) => {
  return (
    <>
      {premiumCardAvatar.map((img, ind) => (
        <img
          key={ind} 
          width={size}
          height={size}
          src={img.name}
          className={`rounded-full border-2 ${border ? `border-[${border}]` : "border-inherit"} ${ind !== 0 && `relative right-${ind * 2}`} `}
          alt="profile"
        />
      ))}
    </>
  );
};

export default Avatar;
