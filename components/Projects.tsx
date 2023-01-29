import { motion } from "framer-motion";
import React from "react";
import { Project } from "../typings";
import ProjectCard from "./ProjectCard";

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left max-w-full mx-auto items-center z-0"
    >
      <h3 className="pt-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="h-4/5 w-full flex space-x-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 pt-6 sm:pt-0">
        {projects?.map((project, i) => (
          <ProjectCard
            key={project._id}
            project={project}
            totalProjects={projects.length}
            index={i}
          />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
