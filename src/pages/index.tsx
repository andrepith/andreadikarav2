import axios from "axios";
import type { GetStaticProps } from "next";
import LandingTop from "../components/LandingTop";

export const getStaticProps: GetStaticProps = async () => {
  const bio = await axios.get("http://andreadikaraapi.herokuapp.com/");
  return {
    props: {
      bio: bio.data,
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
