import React, { useState } from "react";

export type RateboxProps = {
  name: string;
};

const Ratebox = ({ name }: RateboxProps) => {
  const [selectIndex, setSelectedIndex] = useState<number | null>(null);

  const colors = [
    { hover: "hover:bg-red-600", active: "bg-red-600" },
    { hover: "hover:bg-orange-400", active: "bg-orange-400" },
    { hover: "hover:bg-yellow-400", active: "bg-yellow-400" },
    { hover: "hover:bg-green-400", active: "bg-green-400" },
    { hover: "hover:bg-green-700", active: "bg-green-700" },
  ];

  return (
    <div className="flex justify-center">
      <div className="shadow-xl mt-7 border-2 p-3 w-10/12 sm:w-8/12">
        <div className="text-sm font-bold mt-2 sm:text-2xl">{name}</div>
        <div className="flex justify-center mt-2 md:mt-4 mb-4 h-9 gap-1">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-16 rounded-xl h-full 
                ${selectIndex === index ? color.active : "bg-slate-400"} 
                ${color.hover}`}
            ></button>
          ))}
        </div>
        <div className="flex justify-between text-sm sm:mt-4 sm:mb-2 sm:text-lg">
          <div>1 - Awful</div>
          <div>5 - Awesome</div>
        </div>
      </div>
    </div>
  );
};

export default Ratebox;
