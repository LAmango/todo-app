import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

describe("Todo App", () => {
  it("Has an 'Add' button", () => {
    render(<App />);

    expect(screen.queryByRole("button", { name: "Add" })).toBeInTheDocument();
  });

  it("Has an input element", () => {
    render(<App />);

    expect(screen.queryByRole("textbox")).toBeInTheDocument();
  });

  it("Add a todo", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.queryByRole("textbox");

    await userEvent.type(input, "My new todo");

    await user.click(screen.queryByRole("button", { name: "Add" }));

    expect(screen.queryByText("My new todo")).toBeInTheDocument();
  });
});
