const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin"); 

module.exports = (env, argv) => {
  let isProd = false;

  if(argv.mode !== 'production'){
    console.log('Outputting code in dev mode - non minified.');
  } else if (argv.mode == 'production'){
    isProd = true;
    console.log('Building production ready code - minified & ready to deploy.')
  }

  return{
    entry: "./src/index.tsx",
    output: {
      filename: "[name].min.js",
      path: path.resolve(__dirname, "dist")
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin({ })],
      alias: {
        selectors: path.resolve(__dirname, "ts/selectors"),
        actions: path.resolve(__dirname, "ts/actions"),
        components: path.resolve(__dirname, "ts/components"),
        reducers: path.resolve(__dirname, "ts/reducers"),
        store: path.resolve(__dirname, "ts/store"),
        styles: path.resolve(__dirname, "src/styles"),
        fonts: path.resolve(__dirname, "src/fonts")
      },
      // All resolvable extensions.
       extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"]
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
      contentBase: "./dist",
      hot: true
    },
    optimization: {
      minimize: isProd,
      minimizer: isProd ? [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true 
        }),
        new OptimizeCSSAssetsPlugin({})
      ] : []
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/, 
          exclude: /node_modules/,
          use: {
            loader: "ts-loader"
          }
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.scss$/,
          use:  [  
            "style-loader",
            MiniCssExtractPlugin.loader,
            "css-loader?sourceMap",
            "sass-loader?sourceMap"
          ]
        },
        {
          test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          }
        }
      ]
    },
    plugins: [
      // Cleans dist folder when building project.
      new CleanWebpackPlugin(),
      // Html Webpack Plugin
      new HtmlWebPackPlugin({
        favicon: "./public/favicon.ico",
        template: "./src/index.html",
        filename: "index.html",
        title: "Cinema King"
      }),
      new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: isProd ? "[name].css" : "[name].[hash].css",
      chunkFilename: isProd ? "[id].css" : "[id].[hash].css",
      ignoreOrder: false,
      })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
  }
};