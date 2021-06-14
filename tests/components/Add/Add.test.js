import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import AddIdeas from "../../../src/components/Add/AddIdeas";

describe("Add Idea component", () => {
	beforeEach(() => {
		jest.resetAllMocks();
		render(<AddIdeas />);
	});

	it("TExtbox for title  is displayed", () => {
		const textbox = screen.getByPlaceholderText("title");
		expect(textbox).toBeDefined();
	});
	it("TExtbox for description is displayed", () => {
		const textbox = screen.getByPlaceholderText("description");
		expect(textbox).toBeDefined();
	});

	it("checkboxes are displayed and unchecked", () => {
		const cb = screen.getAllByTestId("cb");
		expect(cb).toBeDefined();
	});
});
