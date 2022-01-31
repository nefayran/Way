module.exports = {
    moduleFileExtensions: ["js", "ts", "json", "vue"],
    transform: {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    snapshotSerializers: ["jest-serializer-vue"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testURL: "http://localhost/",
    updateSnapshot: true,
};
