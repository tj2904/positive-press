// jest.config.mjs
import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage/",
  coverageReporters: ["html", ["text", { skipFull: true }]],
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}",
    "!**/.next/**",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!*.config.{ts,tsx,js,jsx}",
    "!**/coverage/**",
    "!**/lib/**",
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
