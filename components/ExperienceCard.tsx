import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg justify-evenly items-center space-y-6 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] md:snap-center bg-[#292929] py-8 px-4 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-500 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-24 h-24 xl:w-40 xl:h-40 rounded-full object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt={""}
          width={300}
          height={300}
        />
      </motion.div>
      <div className="px-0 md:px-10 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
        <h4 className="text-3xl font-light">{experience.company}</h4>
        <p className="uppercase font-bold text-2xl mt-1">
          {experience.jobTitle}
        </p>
        <div className="flex space-x-2 mt-2">
          {/* tech used */}
          {experience.technologies.map((tech) => (
            <Image
              key={tech._id}
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              src={urlFor(tech.image).url()}
              width={20}
              height={20}
              alt={""}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 max-w-lg text-lg pr-3">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
