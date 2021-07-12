import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Carousel";

it("renders Carousel without crashing", function() {
  render(<Carousel />);
});
