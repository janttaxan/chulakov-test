module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
  moduleNameMapper: {
    "\\.(css)": "identity-obj-proxy",
    "\\.(mp4)": "identity-obj-proxy",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
