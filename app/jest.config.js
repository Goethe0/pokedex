module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "<rootDir>/src/test-setup.ts",
    "<rootDir>/src/__mocks__/jasmine-mock.js",
  ],
  transform: {
    "^.+\\.(ts|js|html)$": [
      "jest-preset-angular",
      {
        tsconfig: "<rootDir>/tsconfig.spec.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "html", "js"],
  coverageDirectory: "<rootDir>/coverage",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/file-mock.js",
    "\\.(html)$": "<rootDir>/src/__mocks__/html-mock.js",
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};
