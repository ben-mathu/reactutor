const path = require("path");
const config = {
  entry: "./Main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    loaders: [
    {
      test:/\.(js|jsx)$/,
      loader: "babel-loader",
      query: {
        presets: ["es2016", "react"]
      }
    }
  ]
  }
};

 

module.exports = config;