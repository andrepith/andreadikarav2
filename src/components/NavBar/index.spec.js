import renderer from "react-test-renderer";
import NavBar from "../NavBar";

it("Renders correctly", () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
