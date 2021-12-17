import type { GetStaticProps } from "next";
import bioApi from "@/lib/BioApi";
import LandingTop from "@/components/LandingTop";

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
    </main>
  );
};

export default Home;
