module.exports = {
  //roots: ["<rootDir>/src"],
  // testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": "esbuild-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testEnvironment: "jsdom",
};

// module.exports = {
//   roots: ["<rootDir>/src"],
//   testMatch: [
//     "**/__tests__/**/*.+(ts|tsx|js)",
//     "**/?(*.)+(spec|test).+(ts|tsx|js)",
//   ],
//   transform: {
//     "^.+\\.(ts|tsx)$": "ts-jest",
//   },
//   setupFilesAfterEnv: ["<rootDir>/src/setUpTests.ts"],
// };
