import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NavigationSidebar from "../app/components/navigation-sidebar";

test("Page with user session", async () => {
  const overrides = {
    session: { user: { name: "test" }, expires: "2024-07-01T00:00:00.000Z" },
  };
  const page = await NavigationSidebar({ overrides });
  render(page);
  expect(screen.getByRole("link", { name: "Sign Out" })).toBeDefined();
});

test("Page without user session", async () => {
  const overrides = { session: null };
  const page = await NavigationSidebar({ overrides });
  render(page);
  expect(screen.getByRole("link", { name: "Sign In" })).toBeDefined();
});
