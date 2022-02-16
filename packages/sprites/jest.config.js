module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testURL: "http://localhost/",
  updateSnapshot: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,vue}",
    "!**/node_modules/**",
    "!**/index.**",
  ],
  coverageReporters: ["lcov", "html", "text"],
};
