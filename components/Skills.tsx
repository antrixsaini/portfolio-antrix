import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Skill } from "../typings";
import SkillCard from "./SkillCard";

type Props = { skills: Skill[] };

export default function Skills({ skills }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="h-screen flex flex-col overflow-hidden text-center max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 items-center">
      <div className="pt-20">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>
        <h3
          className="uppercase tracking-[3px] text-sm text-gray-500 
      "
        >
          Hover over a skill for current proficiency
        </h3>
      </div>
      <div className="h-full flex flex-col justify-start md:justify-center">
        <div ref={ref} className="py-10 px-2 grid grid-cols-4 gap-3">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <SkillCard key={skill._id} skill={skill} isInView={isInView} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <SkillCard
              key={skill._id}
              skill={skill}
              directionLeft
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
