import axios from "axios";
import { render, screen } from "@testing-library/react";
import ShallowRenderer from "react-test-renderer/shallow";
import Home, { getStaticProps } from "../index";
import { JustifyLeft } from "react-bootstrap-icons";

const props = {
  bio: {
    firstName: "",
    nationality: "",
    aboutMe: "",
    email: "",
    resumeLink: "",
  },
};

describe("Home passing props to landingtop", () => {
  it("have wrapper class", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Home {...props} />);
    const result = renderer.getRenderOutput();
  });
});
