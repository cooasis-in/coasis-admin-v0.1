import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import PriorityTableCard from "../../components/cards/PriorityTableCard";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { ProjectList } from "../../config";
const OpenProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <DashboardLayout>
      <div className="w-full h-[100%] p-4 gap-4">
        <div className="flex justify-between items-center m-4">
          <h1 className="text-normal font-normal">Ongoing</h1>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={ProjectList.length}
            paginate={paginate}
          />
        </div>
        <div className="flex justify-between items-center m-4">
          <PriorityTableCard
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OpenProjects;
