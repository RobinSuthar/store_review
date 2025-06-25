"use client";
import Description from "./Description";

const Header = () => {
  return (
    <header>
      <div className="flex-col text-black text-center justify-center items-center">
        <h1 className="text-5xl mt-2">Highlander </h1>
        <h3 className="text-sm"> Wine and Spirts</h3>
        <h5 className="text-sm">EST. 1961</h5>
      </div>

      <div className="border-2 mt-3 border-y-black text-shadow-amber-100 "></div>
      <Description />
    </header>
  );
};

export default Header;
