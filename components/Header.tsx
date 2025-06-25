"use client";
import highlanderImage from "../public/Highlander_Black_HR.jpg";
import Image from "next/image";
import Description from "./Description";

const Header = () => {
  return (
    <header>
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
