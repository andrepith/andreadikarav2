import { XCircle } from "react-bootstrap-icons";

interface OverlayInterface {
  isOpen: boolean;
  handleClose: () => void;
  github: string;
  linkedin: string;
  email: string;
}

const Overlay = ({
  isOpen,
  handleClose,
  github,
  linkedin,
  email,
}: OverlayInterface) => {
  return (
    <div
      id="navOverlay"
      className={`nav-overlay ${isOpen ? "d-block" : "d-none"}`}
    >
      <span className="nav-close">
        <XCircle onClick={handleClose} />
      </span>
      <div className="overlay-content">
        <a href={github} target="__blank">
          github
        </a>
        <a href={linkedin} target="__blank">
          linkedin
        </a>
        <a href={`mailto:${email}`}>email</a>
      </div>
    </div>
  );
};

export default Overlay;
