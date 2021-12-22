import type { GetStaticProps } from "next";
import bioApi from "../lib/BioApi";
import NavBar from "../components/NavBar";
import LandingTop from "../components/LandingTop";
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
        />
        <Showcase portofolio={bio.portofolio} />
        <Skillset skillset={bio.skillset} />
      </main>
    </>
  );
};

export default Home;
