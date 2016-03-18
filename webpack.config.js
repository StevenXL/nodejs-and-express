module.exports = {
  entry: "./dev/app.js",
  output: {
    path: __dirname + "/public/js",
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
