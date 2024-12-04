import card from "../../assets/images/card-group.svg";
import GetProjectCard from "./GetProjectCard";
import ShowcaseCard from "./ShowcaseCard";

const GetNextgenEcoCard = () => {
  return (
    <div className="flex-1 p-4 bg-[#050505] rounded-3xl flex flex-col justify-between">
      <div className="flex justify-between mb-2">
        <h1 className="text-3xl tracking-tight p-3">
          <span className="bg-gradient-to-r from-[#FFE67B]  via-[#FF8E8E] to-[#7D22FF]  bg-clip-text text-transparent">
            Welcome to
          </span>
          <br />
          Nex-gen design
          <br />
          ecosystem
        </h1>
        <img src={card} alt="card-img" width={250} height={250} />
      </div>
      <div className="flex gap-4 justify-between">
        <GetProjectCard  className="basis-1/2"/>
        <ShowcaseCard className= "basis-1/2"/>
      </div>
    </div>
  );
};

export default GetNextgenEcoCard;
