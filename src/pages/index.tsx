import type { GetStaticProps } from "next";
import bioApi from "@/lib/BioApi";
import LandingTop from "@/components/LandingTop";
import Showcase from "@/components/Showcase";
import Skillset from "@/components/Skillset";

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
    nationality: string;
    aboutMe: string;
    email: string;
    resumeLink: string;
    portofolio: Array<any>;
    skillset: Array<any>;
  };
}

const Home = ({ bio }: HomeProps) => {
  return (
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
  );
};

export default Home;
