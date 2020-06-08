const path = require("path")

const isProd = process.env.NODE_ENV === 'production' ? true : false;
const isDev = process.env.NODE_ENV === 'development' ? true : false;

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: isProd ? "production" : (isDev ? "development" : 'none'),
  output: {
    filename: "assets/[name]-bundle.js",
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: "dist"
  }
}
