import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import PriorityTableCard from "../../components/Table/PriorityTable";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { ProjectList } from "../../config";

const ClosedProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter for completed and cancelled projects
  const closedProjects = ProjectList.filter(
    project => project.projectStatus === "Completed" || project.projectStatus === "Cancelled"
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <DashboardLayout>
      <div className="w-full h-[100%] p-4 gap-4 overflow-y-auto custom-scrollbar scrollbar-md">
        <div className="flex justify-between items-center m-4">
          <h1 className="text-normal font-normal">Closed Projects</h1>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={closedProjects.length}
            paginate={paginate}
          />
        </div>
        <div className="flex justify-between items-center m-4">
          <PriorityTableCard
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            filteredProjects={closedProjects}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClosedProjects;
