import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import PriorityTableCard from "../../components/Table/PriorityTable";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { ProjectList } from "../../config";

const OpenProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter for pending projects
  const openProjects = ProjectList.filter(project => project.projectStatus === "Pending");


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <DashboardLayout>
      <div className="w-full h-[100%] p-4 gap-4 overflow-y-auto custom-scrollbar scrollbar-md">
        <div className="flex justify-between items-center m-4">
          <h1 className="text-normal font-normal">Ongoing</h1>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={openProjects.length}
            paginate={paginate}
          />
        </div>
        <div className="flex justify-between items-center m-4">
          <PriorityTableCard
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            filteredProjects={openProjects}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OpenProjects;
