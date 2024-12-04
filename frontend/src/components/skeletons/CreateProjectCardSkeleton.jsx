import React from "react";
import Skeleton from "react-loading-skeleton";
import skeleton1 from "../../assets/images/create-project-skeleton-1.png";
import skeleton2 from "../../assets/images/create-project-skeleton-2.png";
import skeleton3 from "../../assets/images/create-project-skeleton-3.png";

const CreateProjectCardSkeleton = () => {
  return (
    <div className="basis-[32%] h-full bg-[#050505] rounded-3xl">
      <header className="h-[65%] w-full relative overflow-hidden">
        <img src={skeleton1} alt="skeleton" className="absolute top-4 left-2" />
        <img
          src={skeleton2}
          alt="skeleton"
          className="absolute top-4 -right-16"
        />
        <img
          src={skeleton2}
          alt="skeleton"
          className="absolute top-16 -right-4"
        />
        <img
          src={skeleton3}
          alt="skeleton"
          className="absolute bottom-0 -left-4"
        />
      </header>
      <footer className="w-full h-[35%] flex flex-col items-center justify-center">
        <Skeleton width={26} height={26} />
        <Skeleton width={150} height={20} />
      </footer>
    </div>
  );
};

export default CreateProjectCardSkeleton;