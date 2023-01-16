import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "../asset/heroImage.jpg";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Antrix Portfolio</title>
      </Head>
      {/** Header */}
      <Header />
      {/** Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/** About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/** Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/** Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/** Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/** Contact Me */}
      <section id="contactMe" className="snap-start">
        <ContactMe />
      </section>
      <Link href={"#hero"}>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src={HeroImage}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};
export default Home;
