import React from "react";
import DummyCurrency from "../../assets/images/dummy-currency.svg";

const GetPaidCard = () => {
  return (
    <div>
      <div className="flex-1 p-4 bg-[#050505] rounded-3xl flex flex-col justify-between">
        <div className="">
          <img
          className="py-4 mr-6"
            src={DummyCurrency}
            alt="DummyCurrency"
            width={300}
            height={100}
          />
        </div>
        <h1 className="text-xl tracking-tight mt-3">
          Get paid on time and keep
          <br />
          100% of what you earn.
        </h1>
      </div>
    </div>
  );
};

export default GetPaidCard;
