import Image from "next/image";
import React from "react";
import SkillImage1 from "../asset/javascript.png";

type Props = {
  // directionLeft?: boolean;
};

function SkillCard({}: Props) {
  return (
    <div className="group flex cursor-pointer">
      <Image
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={SkillImage1}
        alt={""}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
