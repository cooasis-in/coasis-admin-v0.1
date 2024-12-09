import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-2 bg-[#1f1f1f] text-white rounded-lg disabled:opacity-50"
      >
        <MdKeyboardArrowLeft />
      </button>
      <span className="px-4 py-1 bg-[#1f1f1f] text-white rounded-lg disabled:opacity-50">
        {currentPage}
      </span>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-2 bg-[#1f1f1f] text-white rounded-lg disabled:opacity-50"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
