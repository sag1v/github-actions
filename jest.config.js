// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

//import path from "path";

export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/**/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  // setupFiles: [
  //   require.resolve('react-app-polyfill/jsdom'),
  //   require.resolve('./setupTests')
  // ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/jest/transformers/babel-transform.js",
    "^.+\\.css$": "<rootDir>/jest/transformers/css-transform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/jest/transformers/file-transform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": import("identity-obj-proxy"),
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  //globalSetup: path.join(__dirname, "global-setup.js"),
};
