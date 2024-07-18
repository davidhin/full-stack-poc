import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NavigationSidebar from "@/app/components/navigation-sidebar";

test("Page with user session", () => {
  const session = {
    user: { name: "test" },
    expires: "2024-07-01T00:00:00.000Z",
  };
  const page = <NavigationSidebar session={session} />;
  render(page);
  expect(screen.getByRole("link", { name: "Sign Out" })).toBeDefined();
});

test("Page without user session", async () => {
  const page = <NavigationSidebar session={null} />;
  render(page);
  expect(screen.getByRole("link", { name: "Sign In" })).toBeDefined();
});
