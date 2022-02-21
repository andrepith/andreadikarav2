import { useRef } from "react";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import bioApi from "../lib/BioApi";
import NavBar from "../components/NavBar";
import LandingTop from "../components/LandingTop";
import Experience from "../components/Experience";
const Showcase = dynamic(() => import("@/components/Showcase"));
const Skillset = dynamic(() => import("@/components/Skillset"));
const Footer = dynamic(() => import("@/components/Footer"));

export const getStaticProps: GetStaticProps = async () => {
  const bio = await bioApi();
  return {
    props: {
      bio,
    },
  };
};

interface HomeProps {
  bio: {
    firstName: string;
    lastName: string;
    nationality: string;
    aboutMe: string;
    email: string;
    phone: string;
    github: {
      url: string;
    };
    linkedin: {
      url: string;
    };
    experience: Array<any>;
    resumeLink: string;
    portofolio: Array<any>;
    skillset: Array<any>;
  };
}

const Home = ({ bio }: HomeProps) => {
  const myRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    myRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar
        firstName={bio.firstName}
        lastName={bio.lastName}
        github={bio.github.url}
        linkedin={bio.linkedin.url}
        email={bio.email}
      />
      <main className="wrapper">
        <LandingTop
          firstName={bio.firstName}
          nationality={bio.nationality}
          aboutMe={bio.aboutMe}
          email={bio.email}
          resumeLink={bio.resumeLink}
          scrollToBottom={scrollToBottom}
        />
        <Experience experience={bio.experience} ref={myRef} />
        <Showcase portofolio={bio.portofolio} />
        <Skillset skillset={bio.skillset} />
        <Footer email={bio.email} phone={bio.phone} />
      </main>
    </>
  );
};

export default Home;
