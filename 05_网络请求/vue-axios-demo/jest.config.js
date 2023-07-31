module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    "^.+\\.m?jsx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)"
  ]
}
