// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'my-fist-webpack.bundle.js'
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "index.html",
    // }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: require.resolve('css-loader')
          },
        ]
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  performance: { hints: false },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".json"]
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
