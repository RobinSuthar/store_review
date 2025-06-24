import React from "react";

export type RateboxProps = {
  name: string;
};

const Ratebox = ({ name }: RateboxProps) => {
  return (
    <div className=" flex justify-center">
      <div className="shadow-xl mt-7  border-2 p-3 w-10/12 sm:w-8/12">
        <div className=" text-sm font-bold mt-2 sm:text-2xl">{name}</div>
        <div className="flex justify-center mt-4 mb-4 h-9 gap-1  ">
          <div className="bg-slate-400 w-16  rounded-xl hover:bg-red-600 "></div>
          <div className="bg-slate-400 w-16 rounded-md hover:bg-orange-400"></div>
          <div className="bg-slate-400 w-16 rounded-md hover:bg-yellow-400"></div>
          <div className="bg-slate-400 w-16 rounded-md hover:bg-green-400"></div>
          <div className="bg-slate-400 w-16 rounded-sm hover:bg-green-700"></div>
        </div>
        <div className="flex justify-between text-sm sm:mt-4 sm:mb-2 sm:text-lg">
          <div>1- Awful</div>
          <div>5-Awesome</div>
        </div>
      </div>
    </div>
  );
};

export default Ratebox;
