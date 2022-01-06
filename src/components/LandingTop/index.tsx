import { EnvelopeFill, FileArrowDownFill } from "react-bootstrap-icons";

interface LandingTopProps {
  firstName: string;
  nationality: string;
  aboutMe: string;
  email: string;
  resumeLink: string;
}

const LandingTop = ({
  firstName,
  nationality,
  aboutMe,
  email,
  resumeLink,
}: LandingTopProps) => {
  return (
    <div className="d-flex align-items-center landing-top" id="landing-top">
      <div className="container">
        <div className="landing-block">
          <h1 className="landing-title">
            Hey, I’m {firstName} - A Software <br />
            Engineer from {nationality}.
          </h1>
          <p className="mt-4">{aboutMe}</p>
          <div className="d-flex mt-4">
            <div className="me-2">
              <EnvelopeFill size={12} color="white" />
            </div>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className="d-flex mt-2">
            <div className="me-2">
              <FileArrowDownFill size={12} color="white" />
            </div>
            <a
              className="download-link d-block"
              href={resumeLink}
              target="__blank"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTop;
