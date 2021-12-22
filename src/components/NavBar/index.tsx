import { useState } from "react";
import { List } from "react-bootstrap-icons";
import Overlay from "@/components/Overlay";

interface NavBarInterface {
  firstName: string;
  lastName: string;
  github: string;
  linkedin: string;
  email: string;
}

const NavBar = ({
  firstName,
  lastName,
  github,
  linkedin,
  email,
}: NavBarInterface) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Overlay
        isOpen={isOpen}
        handleClose={handleClose}
        github={github}
        linkedin={linkedin}
        email={email}
      />
      <div className="fixed-top navigation" id="navigation">
        <nav className="navbar navbar-expand-lg primary-nav container">
          <a
            aria-current="page"
            className="nav-item nav-link pl-0 mr-4"
            href="/"
          >
            {firstName} {lastName}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleOpen}
            aria-label="nav-mobile"
          >
            <List size={24} />
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav align-items-center ml-auto">
              <a
                className="nav-item nav-link mr-4"
                href={github}
                target="__blank"
              >
                github
              </a>
              <a
                className="nav-item nav-link mr-4"
                href={linkedin}
                target="__blank"
              >
                linkedin
              </a>
              <a
                href={`mailto:${email}`}
                className="btn btn-layered offset"
                role="button"
                aria-pressed="true"
              >
                hire me
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
