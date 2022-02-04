const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.ts", // or './src/index.ts' if TypeScript
  output: {
    filename: "ragnarok-equipment.js", // Desired file name. Same as in package.json's "main" field.
    path: path.resolve(__dirname, "dist"),
    library: "roEquipement", // Desired name for the global variable when using as a drop-in script-tag.
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.tsx?/, // If you are using TypeScript: /\.tsx?$/
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [['@babel/env', { 'targets': { 'node': 6 } }]]
            }
          }
        ]
      }
    ]
  },
  // If using TypeScript
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', 'js']
  },
  // If using an external dependency that should not get bundled, e.g. React
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      })
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    })
  ]
};