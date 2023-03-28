module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,ts,tsx}", "<rootDir>/src/**/*.{spec,test}.{js,ts,tsx}"],
}