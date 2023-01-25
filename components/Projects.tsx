import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";

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
      <div className="h-full w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col  items-center justify-evenly"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image
                className="
                w-[420px] h-[280px] 
                md:w-[480px] md:h-[320px] lg:w-[525px] lg:h-[350px] xl:w-[600px] xl:h-[400px]"
                src={urlFor(project?.image).url()}
                width={1000}
                height={800}
                alt={""}
              />
            </motion.div>
            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
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
                  <p className="text-[#F7AB0A]/50 text-md p-4">
                    Click for Details
                  </p>
                </Link>
              </div>
              <p className="text-md text-center md:text-left pb-4 px-4">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
