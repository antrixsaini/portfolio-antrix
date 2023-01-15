import { motion } from "framer-motion";
import React from "react";
import SkillCard from "./SkillCard";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3
        className="absolute top-32 uppercase tracking-[3px] text-sm text-gray-500 
      "
      >
        Hover over a skill for current proficiency
      </h3>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:mt-20 relative grid grid-cols-4 gap-5"
      >
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </motion.div>
    </div>
  );
}
