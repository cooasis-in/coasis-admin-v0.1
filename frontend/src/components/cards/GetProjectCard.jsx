import card from "../../assets/images/Group 470223.svg"
const GetProjectCard = () => {
  return (
    <div className=" w-full flex flex-col justify-between bg-[#181B1C] rounded-3xl bg-no-repeat bg-contain bg-right-bottom overflow-hidden" style={{ backgroundImage: `url(${card})` }}>
        {/* <div>
          <h1 className="text-2xl tracking-tight p-3">
            Get projects in
            <br />
            your inbox
          </h1>
          <div className="flex flex-col justify-between p-3 gap-3 ml-5">
            <span className="w-fit items-center gap-y-2 py-2 px-4 bg-[#25282b] rounded-2xl text-xs">
              Project Details
            </span>
            <span className=" w-fit items-center gap-y-2 py-2 px-4 bg-[#25282b] rounded-2xl text-xs">
              Project Details
            </span>
          </div>
        </div>
    */}
    <img src={card} alt="card" width={600} height={600}  className="object-cover bg-no-repeat"/>
      
      </div>
  )
}

export default GetProjectCard
