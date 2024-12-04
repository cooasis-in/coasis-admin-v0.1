import connectionImg from "../../assets/images/connecting-img.svg"
import logoImg2 from "../../assets/images/logo-img-2.png"

const GetSetBackCard = () => {
  return (
    <div className=" p-4 bg-[#050505] rounded-3xl flex justify-between gap-[500px] relative">
      <div className="flex flex-col p-2">
        <h1 className="text-[35px] font-normal text-[ #FCFCD8] p-4 my-3 items-start">
          Sit back & relax !
        </h1>
        <p className="text-[20px] font-light text-[ #FCFCD8B0] p-4 mb-3">
          Now, there is no need to bid and get into <br />
          tedious and stressful process to get a new <br />
          client. Let the platform do its magic. We will <br />
          notify you once you start getting work.
        </p>
      </div>
      <div className="items-end py-4 pr-16">
        <img src={connectionImg} alt="connection-img" height={400} width={400}/>
      </div>
      <div className="w-fit h-fit rounded-2xl absolute right-10 cursor-pointer  bg-gradient-to-r from-[#FFE67B]  via-[#FF8E8E] to-[#7D22FF]  bg-clip-text text-transparent flex items-center gap-x-2 px-4 py-2 mt-10 bg-[#141414] border border-[#292929] "
      >
        <img src={logoImg2} alt="logo" width={22} />
        <p>Get 3 Months Free</p>
      </div>
    </div>
  );
};

export default GetSetBackCard;
