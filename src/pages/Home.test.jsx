import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../router/routes";
import App from "../App";
import Home from "./Home";

describe("Testing Home page", () => {
  it("renders loading text", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    const allPosts = [];
    const error = null;
    const loading = true;

    render(
      <RouterProvider router={router}>
        <Home context={[allPosts, error, loading]} />
      </RouterProvider>,
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
