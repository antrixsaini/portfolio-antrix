import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen text-center max-w-7xl px-10 mx-auto"
    >
      <h3 className="pt-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="pt-10 flex flex-col md:text-left md:flex-row justify-evenly items-center h-3/4">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="md:mb-0 flex-shrink-0 w-56 h-56 
            md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
        >
          <Image
            className="rounded-full object-cover md:rounded-lg"
            src={urlFor(pageInfo?.profilePic).url()}
            alt={""}
            width={500}
            height={500}
          />
        </motion.div>
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p>{pageInfo.backgroundInformation}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
