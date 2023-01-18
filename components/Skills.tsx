import React from "react";
import { Skill } from "../typings";
import SkillCard from "./SkillCard";

type Props = { skills: Skill[] };

export default function Skills({ skills }: Props) {
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
      <div className="md:mt-20 relative grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillCard key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </div>
  );
}
