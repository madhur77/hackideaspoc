import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import axios from "axios";
import { mocked } from "ts-jest/utils";
import { getServerSideProps } from "../src/pages/index";
jest.mock("../src/components/Add/AddIdeas", () => {
	return {
		__esModule: true,
		// eslint-disable-next-line react/display-name
		default: () => {
			return <>textbox</>;
		}
	};
});

jest.mock("../src/components/ListIdeas/ListIdeas", () => {
	return {
		__esModule: true,
		// eslint-disable-next-line react/display-name
		default: () => {
			return <>list of ideas</>;
		}
	};
});

jest.mock("axios");
const mockedAxiosGet = mocked(axios.get);

describe("getServerSideProps ", () => {
	beforeEach(() => {
		mockedAxiosGet.mockImplementation(() =>
			Promise.resolve({
				data: [
					{
						id: "1",
						description: "ddd",
						title: "ddd",
						epoch: 1623611195,
						votes: 4,
						tags: "tech,feature"
					}
				]
			})
		);
	});

	it("should return props if api info respond properly", async () => {
		const response = await getServerSideProps();
		expect(response).toEqual({
			props: {
				username: null,
				listofideas: [
					{
						id: "1",
						description: "ddd",
						title: "ddd",
						epoch: 1623611195,
						votes: 4,
						tags: "tech,feature"
					}
				]
			}
		});
	});
});
