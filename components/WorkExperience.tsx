import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = { experiences: Experience[] };

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex overflow-hidden flex-col text-lft max-w-full px-10 mx-auto items-center"
    >
      <h3 className="pt-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      {/* Experience Cards */}
      <div className="h-screen w-full flex space-x-5 overflow-x-scroll p-2 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {experiences.map((experience) => {
          return (
            <ExperienceCard key={experience._id} experience={experience} />
          );
        })}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
