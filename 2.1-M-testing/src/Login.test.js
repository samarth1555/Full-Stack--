import { screen, render } from "@testing-library/react";
import Login from "./Login";

test("renders correctly", () => {
  render(<Login username="John" />);
  const name = screen.getByText(/Welcome John/i);
  expect(name).toBeInTheDocument();
});

test("matches snapshot", () => {

  const { asFragment } = render(<Login username="John" />);

  expect(asFragment()).toMatchSnapshot();

});