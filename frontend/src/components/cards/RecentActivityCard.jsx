import { projectsData } from "../../config";

const RecentActivityCard = () => {
  const repeatedProjects = [...projectsData, ...projectsData];

  return (
    <div className="bg-[#121212] flex flex-col justify-between m-4 p-4 rounded-2xl">
      <h3 className="text-lg text-white mb-4">Recent Activity</h3>

      {repeatedProjects.map((project, index) => (
        <div key={index} className="p-2 mx-2">
          <div className="flex items-start">
            <img
              src={project.img}
              alt={`Profile ${index}`}
              height={30}
              width={30}
              className=" rounded-full mr-4"
            />
            <div className="flex flex-col">
              <p className="text-white text-sm">{project.details}</p>
              <span className="text-gray-400 text-xs">{project.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivityCard;
