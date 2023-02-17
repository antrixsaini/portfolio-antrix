import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
  isInView: boolean;
};

function SkillCard({ directionLeft, skill, isInView }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : directionLeft ? -200 : 200,
      }}
      viewport={{ once: true }}
      className="group flex cursor-pointer relative"
    >
      <Image
        className="rounded-full border border-gray-500 object-cover w-20 h-20 lg:w-[100px] lg:h-[100px] filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
        width={200}
        height={200}
        alt={""}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 lg:w-[100px] lg:h-[100px] rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;
