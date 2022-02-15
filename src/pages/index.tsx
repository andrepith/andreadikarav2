import { useRef } from "react";
import type { GetStaticProps } from "next";
import bioApi from "../lib/BioApi";
import NavBar from "../components/NavBar";
import LandingTop from "../components/LandingTop";
import Experience from "@/components/Experience";
import Showcase from "../components/Showcase";
import Skillset from "../components/Skillset";

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
    github: {
      url: string;
    };
    linkedin: {
      url: string;
    };
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
        <Experience />
        <Showcase portofolio={bio.portofolio} ref={myRef} />
        <Skillset skillset={bio.skillset} />
      </main>
    </>
  );
};

export default Home;
