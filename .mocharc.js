module.exports = {
  watch: true,
  exclude: ["node_modules"],
  watchFiles: "src/**/*.ts",
  spec: "src/**/*.test.ts",
  require: 'mocha/setup.js'
}