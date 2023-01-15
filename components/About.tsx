import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../asset/aboutImage.png";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center relative"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-24 md:mb-0 flex-shrink-0 w-56 h-56 
            md:w-64 md:h-64 xl:w-[500px] xl:h-[500px] xl:-mb-10"
      >
        <Image
          className="rounded-full object-cover md:rounded-lg"
          src={AboutImage}
          alt={""}
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p>
          A full-stack developer with knowledge and skills accumulated by
          working on projects in a collaborative environment. Continually
          pushing to learn advanced technology through self-education and
          striving for innovation by acquiring and sharpening problem-solving
          skills.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
