import React from "react";
import {
  EnvelopeFill,
  FileArrowDownFill,
  ArrowDownCircleFill,
} from "react-bootstrap-icons";
import FadeInAnimation from "../../lib/Helpers/FadeInAnimation";

interface LandingTopProps {
  firstName: string;
  nationality: string;
  aboutMe: string;
  email: string;
  resumeLink: string;
  scrollToBottom: () => void;
}

const LandingTop = ({
  firstName,
  nationality,
  aboutMe,
  email,
  resumeLink,
  scrollToBottom,
}: LandingTopProps) => {
  return (
    <div className="landing-top position-relative" id="landing-top">
      <div className="container landing-top__text">
        <div className="landing-block">
          <FadeInAnimation
            wrapperElement="h1"
            direction="up"
            className="landing-title"
          >
            Hey, I’m {firstName} - A Software <br />
            Engineer from {nationality}.
          </FadeInAnimation>
          <FadeInAnimation
            wrapperElement="p"
            direction="up"
            className="mt-4"
            delay={0.5}
          >
            {aboutMe}
          </FadeInAnimation>
          <FadeInAnimation direction="up" delay={1} className="d-flex mt-4">
            <div className="me-2">
              <EnvelopeFill size={16} color="white" />
            </div>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
            </a>
          </FadeInAnimation>
          <FadeInAnimation direction="up" delay={1.1} className="d-flex mt-2">
            <div className="me-2">
              <FileArrowDownFill size={16} color="white" />
            </div>
            <a
              className="download-link d-block"
              href={resumeLink}
              target="__blank"
            >
              Download Resume
            </a>
          </FadeInAnimation>
        </div>
      </div>
      <div className="landing-top__foot" onClick={scrollToBottom}>
        <ArrowDownCircleFill size={32} color="white" />
      </div>
    </div>
  );
};

export default LandingTop;
