import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import ListIdeas from "../../../src/components/ListIdeas/ListIdeas";

const mocklist = [
	{
		id: "1",
		description: "ddd",
		title: "ddd",
		epoch: 1623611195,
		votes: 4,
		tags: "tech,feature"
	},
	{
		id: "2",
		description: "idea 2",
		title: "idea one",
		epoch: 1623614400,
		votes: 3,
		tags: "moonshot,bacaklog"
	}
];

React.useState = jest.fn().mockReturnValue(mocklist);

describe("List Ideas component", () => {
	beforeEach(() => {
		jest.resetAllMocks();
		render(<ListIdeas list={mocklist} />);
	});
	test("all filters are displayed", () => {
		const button = screen.getAllByRole("button");
		expect(button).toBeDefined();
	});

	test("ideas are displayed for mock data", () => {
		const ideas = screen.getAllByTestId("idea");
		expect(ideas).toBeDefined();
	});
});
