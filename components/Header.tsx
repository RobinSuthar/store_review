"use client";
import { Open_Sans } from "next/font/google";
import highlanderImage from "../public/Highlander_Black_HR.jpg";
import Image from "next/image";
import Description from "./Description";
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const Header = () => {
  return (
    <header className={`${openSans.className} `}>
      <div className="flex  justify-center items-center">
        <Image
          src={highlanderImage}
          width={200}
          height={200}
          alt="Picture of the author"
        />{" "}
      </div>

      <div className="border-2 border-y-black text-shadow-amber-100 "></div>
      <Description />
    </header>
  );
};

export default Header;
