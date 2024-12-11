import { useEffect, useState } from "react";
import CreatorCards from "../../components/cards/CreatorCards";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { RiArrowDownSLine } from "react-icons/ri";
import { creatorCardData } from "../../config"; // Assuming this is your data file
import CreatorDetailCard from "../../components/cards/CreatorDetailCard";
import YourTeamBandwidth from "../../assets/images/your-team-bandwidth.svg";
import { useSearchParams, useLocation } from "react-router-dom";  

const creatorCategoryOptions = [
  "All Creators",
  "Beginner Creator",
  "Experienced",
  "Pro Designer",
  "Aspiring Creator",
];

const Creators = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();  // <-- Get the location object
  const initialProjectId = Number(searchParams.get("project")) || 1;
  const [filteredProjects, setFilteredProjects] = useState(creatorCardData);
  const [selectedProject, setSelectedProject] = useState(initialProjectId);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const projectParam = Number(searchParams.get("project"));
    if (projectParam) {
      setSelectedProject(projectParam);
    }
  }, [searchParams]);

  const handleFilter = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "All Creators") {
      setFilteredProjects(creatorCardData);
    } else {
      const filteredData = creatorCardData.filter(
        (ele) => ele.creatorCategory === selectedCategory
      );
      setFilteredProjects(filteredData);
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full h-[100%] p-4 flex flex-col lg:flex-row gap-4">
        <div className="flex-1 lg:basis-5/6 flex flex-col gap-4">
          {/* Your Team Bandwidth Image Section */}
          <section className="p-4">
            <h5 className="pb-4 px-4">Your Team Bandwidth</h5>
            <div className="bg-[#121212] rounded-3xl flex justify-center items-center py-4">
              <img
                src={YourTeamBandwidth}
                alt="bandwidth-img"
                width={650}
                height={600}
              />
            </div>
          </section>

          {/* Creator Cards Filter Section */}
          <section className="w-full h-full">
            <div className="w-full h-full px-4 pb-4 gap-4">
              <div className="flex justify-between items-center m-4">
                <div className="relative inline-block text-[15px] font-normal w-1/4">
                  <select
                    onChange={handleFilter}
                    className="bg-[#141414] py-2 px-4 pr-10 rounded-xl appearance-none w-full cursor-pointer"
                  >
                    {creatorCategoryOptions.map((ele) => (
                      <option key={ele} value={ele}>
                        {ele}
                      </option>
                    ))}
                  </select>
                  <span className="absolute inset-y-0 right-4 top-1 flex items-center pointer-events-none">
                    <RiArrowDownSLine size={20} />
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  <h5 className="opacity-55">Filter By</h5>
                </div>
              </div>

              {/* Creator Cards Display */}
              <div className="w-full flex-1 pr-2 flex justify-between flex-wrap gap-4 overflow-y-auto custom-scrollbar scrollbar-md">
                {filteredProjects.map((ele) => (
                  <div key={ele.id} className="basis-[48%]">
                    <CreatorCards
                      id={ele.id}
                      creatorName={ele.name}
                      creatorCategory={ele.creatorCategory}
                      setTabIndex={setTabIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Section: Creator Detail Card */}
        <section className="lg:basis-1/6 h-full">
          <div className="h-fit bg-inherit flex flex-col gap-4 justify-between overflow-y-auto custom-scrollbar scrollbar-md">
            {!location?.search?.includes("draft") &&  
              creatorCardData
                .filter((ele) => ele.id === selectedProject)
                .map((ele, ind) => (
                  <CreatorDetailCard
                    key={ele.id}
                    brand={ele.brand}
                    category={ele.creatorCategory}
                    lastUpdated={ele.lastUpdated}
                    projectName={ele.name}
                    projectOverview={ele.overview}
                    projectObjective={ele.objective}
                    projectDuration={ele.duration}
                    projectStatus={ele.status}
                    files={ele.files}
                    reviews={ele.reviews}
                    projectId={ele.id}
                    tabIndex={tabIndex}
                    setTabIndex={setTabIndex}
                  />
                ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Creators;
