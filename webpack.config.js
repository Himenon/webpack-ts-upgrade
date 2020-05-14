module.exports = {
  mode: "development",
  devtool: "source-map",
  target: "web",
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
};
