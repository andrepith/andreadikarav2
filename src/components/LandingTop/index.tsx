import { EnvelopeFill, FileArrowDownFill } from "react-bootstrap-icons";

const LandingTop: React.FunctionComponent = () => {
  return (
    <div className="d-flex align-items-center landing-top" id="landing-top">
      <div className="container">
        <div className="landing-block">
          <h1 className="landing-title">
            Hey, I’m Andre - A Software <br />
            Engineer from Indonesia.
          </h1>
          <p className="mt-4">
            Software Engineer based in Jakarta, Indonesia with passion to making
            complexed things simple for users. I love creating elegant and smart
            user-centered application which solve complex problems. I am also
            very passionate about simplicity and the psychology behind the
            design.
          </p>
          <div className="d-flex mt-4">
            <div className="me-2">
              <EnvelopeFill size={12} />
            </div>
            <a className="email-link" href="mailto:andrepith@yahoo.co.uk">
              andrepith@yahoo.co.uk
            </a>
          </div>
          <div className="d-flex mt-2">
            <div className="me-2">
              <FileArrowDownFill size={12} />
            </div>
            <a
              className="download-link d-block"
              href="https://drive.google.com/file/d/1EDhmqNfGvwMeKWScVN7w-hH3RUsXVSh-/view"
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
