import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { HelloWorld } from "./HelloWorld";

test("HelloWorld renders", () => {
  render(<HelloWorld />);
});

test("HelloWorld contains specific HTML elements", () => {
  render(<HelloWorld />);
  expect(screen.getByAltText("manticore logo")).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(3);
});

test("HelloWorld contains correct text content", () => {
  render(<HelloWorld />);
  expect(screen.getByText(/Welcome to MantiCore!/)).toBeInTheDocument();
  expect(screen.getByText(/Documentation/)).toBeInTheDocument();
  expect(screen.getByText(/Got stuck?/)).toBeInTheDocument();
  expect(screen.getByText(/Tooling/)).toBeInTheDocument();
});
