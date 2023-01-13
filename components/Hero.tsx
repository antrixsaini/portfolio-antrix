// react-simple-typewriter library

import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import HeroImage from "../asset/heroImage.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Antriksh Saini",
      "Guy-who-loves-travel-with-coffee.tsx",
      "<ButLovesToCode=>More />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image className="rounded-full h-32 w-32" src={HeroImage} alt={""} />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10 pt-2">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
