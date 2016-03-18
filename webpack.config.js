module.exports = {
  entry: "./dev/app.js",
  output: {
    path: __dirname + "/build",
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
