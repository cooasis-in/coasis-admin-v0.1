import { useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const SelectPriorityTable = ({ priority }) => {
  const [selectedPriority, setSelectedPriority] = useState(priority);

  const handleChange = (e) => {
    setSelectedPriority(e.target.value);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#ac5858";
      case "Low":
        return "#4E8B6E";
      case "Medium":
        return "#9B8E4D";
      default:
        return "#ac5858";
    }
  };
  const options = [
    { value: "High", 
      color: "#ac5858" 
    },
    {
      value: "Low",
      color: "#4E8B6E",
    },
    {
      value: "Medium",
      color: "#9B8E4D",
    },
  ];

  return (
    <div className="flex bg-[#191919] items-center rounded-xl appearance-none relative mr-7">
      <select
        onChange={handleChange}
        // value={selectedPriority}
        className={`bg-[#191919] py-3 px-3 pr-6 rounded-xl appearance-none w-full cursor-pointer`  }
        style={{ color: getPriorityColor(selectedPriority) }}
      >
        {options.map((ele, i) => (
          <option key={i} value={ele.value} className={`bg-[#191919] text-[${ele.color}]`}>
            {ele.value}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-1">
        <PiDotsThreeOutlineVerticalFill size={20} />
      </span>
    </div>
  );
};

export default SelectPriorityTable;
