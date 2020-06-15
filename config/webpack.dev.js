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
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attributes: {
                list: [
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src',
                  },
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(gif|jpe?g|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[ext]"
            }
          }
        ]
      }
    ]
  }
}
