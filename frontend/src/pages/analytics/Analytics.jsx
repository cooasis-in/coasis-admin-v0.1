import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import GetNextgenEcoCard from "../../components/cards/GetNextgenEcoCard";
import profileImg from "../../assets/images/Mask group.svg"



const Analytics = () => {
  return (
    <DashboardLayout>
      <div
        className={`w-full h-[100%] p-4 flex justify-between flex-wrap gap-4 overflow-y-auto custom-scrollbar scrollbar-md`}
      >
        <section className="flex basis-4/6"></section>

        <section className="flex basis-2/6">
          <GetNextgenEcoCard />

        </section>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
