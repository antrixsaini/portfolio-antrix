import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Project } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = { project: Project; totalProjects: number; index: number };

const ProjectCard = ({ project, totalProjects, index }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      key={project._id}
      className="w-screen flex-shrink-0 snap-center flex flex-col  items-center justify-start sm:justify-evenly space-y-6"
    >
      <motion.div
        transition={{ duration: 1.2 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -300 }}
      >
        <Image
          className="
                w-[375px] h-[250px]
                sm:w-[420px] sm:h-[280px] 
                md:w-[480px] md:h-[320px] lg:w-[525px] lg:h-[350px] xl:w-[600px] xl:h-[400px]"
          src={urlFor(project?.image).url()}
          width={1000}
          height={800}
          alt={""}
        />
      </motion.div>
      <div className="space-y-6 px-2 md:px-10 max-w-6xl overflow-y-scroll overflow-hidden scrollbar-thin ">
        <h4 className="text-3xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            Case Study {index + 1} of {totalProjects}:
          </span>{" "}
          {project?.title}
        </h4>
        <div className="flex items-center space-x-2 justify-center ">
          {project?.technologies.map((technology) => (
            <Image
              className="h-10 w-10"
              key={technology._id}
              src={urlFor(technology.image).url()}
              width={200}
              height={200}
              alt=""
            />
          ))}
          <Link href={project.linkToBuild}>
            <p className="text-[#F7AB0A]/50 text-md p-2">Click for Details</p>
          </Link>
        </div>

        <p className="text-md lg:text-lg xl:text-xl text-center md:text-left pb-4">
          {project.summary}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
