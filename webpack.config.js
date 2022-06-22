const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    hot: true,
    open: {
      app: {
        name: "firefox",
      },
    },
    port: 3000,
    static: {
      directory: path.join(__dirname, "app"),
    },
  },
};
