import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("renders NavBar", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const navBarElement = screen.getByTestId("navbar");
    expect(navBarElement).toBeInTheDocument();
  });

  test("renders Footer", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
