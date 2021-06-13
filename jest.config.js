module.exports = {
	//collectCoverageFrom: ["!**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
	setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
	testPathIgnorePatterns: [
		"<rootDir>/node_modules/",
		"<rootDir>/.next/",
		"<rootDir>/tests/jest.setup.ts",
		"<rootDir>/tests/(.*).mock.(js|ts)"
	],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
	},
	testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
	transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
	moduleNameMapper: {
		"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
	},
	collectCoverage: false,
	testEnvironment: "jsdom"
};
