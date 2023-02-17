import Head from "next/head";
import type { GetStaticProps } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Antrix Portfolio</title>
      </Head>
      {/** Header */}
      <Header socials={socials} />
      {/** Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      {/** About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/** Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      {/** Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/** Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/** Contact Me */}
      <section id="contactMe" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Link href={"#hero"}>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src={urlFor(pageInfo?.heroImage).url()}
              width={100}
              height={100}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};
export default Home;

{
  /* posts will be populated at build time by getStaticProps()
    This function gets called at build time on server-side.
  */
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Call an external API endpoint to get data from CMS sanity.io
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    /** 
      Next.js will attempt to re -generate the page:
      when a request comes in at most once every 10 seconds
      for faster experience
    */
    revalidate: 10,
  };
};
