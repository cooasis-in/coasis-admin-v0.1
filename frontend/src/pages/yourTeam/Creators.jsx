import { useEffect, useState } from "react";
import CreatorCards from "../../components/cards/CreatorCards";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { RiArrowDownSLine } from "react-icons/ri";
import { creatorCardData } from "../../config"; // Assuming this is your data file
import CreatorDetailCard from "../../components/cards/CreatorDetailCard";
import YourTeamBandwidth from "../../assets/images/your-team-bandwidth.svg";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

const creatorCategoryOptions = [
  "All Creators",
  "Beginner Creator",
  "Experienced",
  "Pro Designer",
  "Aspiring Creator",
];

const Creators = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const initialProjectId = Number(searchParams.get("project")) || 1;

  const [filteredProjects, setFilteredProjects] = useState(creatorCardData);
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [selectedProject, setSelectedProject] = useState(initialProjectId);
  const [tabIndex, setTabIndex] = useState(0);

  // Update selected project and draft when URL params change
  useEffect(() => {
    const projectParam = Number(searchParams.get("project"));
    const draftParam = Number(searchParams.get("draft"));
    
    if (projectParam) setSelectedProject(projectParam);
    if (draftParam) setSelectedDraft(draftParam);
  }, [searchParams]);

  // Filter projects based on selected creator category
  const handleFilter = (e) => {
    e.preventDefault();
    const category = e.target.value;
    setFilteredProjects(
      category === "All Creators" 
        ? creatorCardData 
        : creatorCardData.filter((ele) => ele.creatorCategory === category)
    );
  };

  return (
    <DashboardLayout>
      <div className="h-full w-full flex justify-between bg-[#0b0b0b]">
        {/* Left section: Creator Cards */}
        <section className="basis-[58%] h-full flex flex-col p-4">
          <h5 className="pb-4 px-4">Your Team Bandwidth</h5>
          <div className="h-fit bg-[#141414] rounded-3xl flex justify-center items-center py-4">
            <img
              src={YourTeamBandwidth}
              alt="bandwidth-img"
              width={650}
              height={600}
            />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Filter by category */}
            <header className="flex h-fit justify-between items-center px-1 py-4 rounded-[26px]">
              <div className="relative inline-block text-[15px] font-normal w-fit">
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
              <div>
                <h5 className="opacity-55">Filter By</h5>
              </div>
            </header>
            {/* Creator Cards */}
            <div className="w-full flex-1 pr-2 flex justify-between flex-wrap gap-4 overflow-y-auto custom-scrollbar scrollbar-md">
              {filteredProjects.map((ele) => (
                <div key={ele.id} className="basis-[48%]">
                  <CreatorCards
                    id={ele.id}
                    creatorName={ele.name}
                    creatorCategory={ele.creatorCategory}
                    setTabIndex={setTabIndex}
                    selectedProject={selectedProject}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vertical Divider */}
        <div className="border-l-2 border-[#FCFCD817] h-full opacity-40"></div>

        {/* Right Section: Creator Detail */}
        <section className="basis-[40%] flex flex-col overflow-hidden">
          <div className="p-4 gap-3">
            {!location?.search?.includes("draft") && 
              creatorCardData
                .filter((ele) => ele.id === selectedProject)
                .map((ele) => (
                  <CreatorDetailCard
                    key={ele.id}
                    category={ele.creatorCategory}
                    lastUpdated={ele.deadline}
                    creatorName={ele.name}
                    creatorInfo={ele.contactInformation}
                    projectOverview={ele.overview}
                    projectObjective={ele.objective}
                    projectDuration={ele.duration}
                    projectStatus={ele.status}
                    files={ele.files}
                    tabIndex={tabIndex}
                    ongoingProject={ele.ongoingProject}
                    creatorSkills={ele.skills}
                    setTabIndex={setTabIndex}
                  />
                ))
            }
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Creators;
