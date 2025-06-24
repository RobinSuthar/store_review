"use client";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const Header = () => {
  return (
    <header className={`${openSans.className} `}>
      <div className="flex  justify-center items-center">
        <div className="mt-5 text-md lg:text-5xl">Rate Anonusmly</div>
      </div>
      <div className="flex justify-center items-center mt-1 lg:mt-3">
        <div>Highlander Wine and Spirts</div>
      </div>
    </header>
  );
};

export default Header;
