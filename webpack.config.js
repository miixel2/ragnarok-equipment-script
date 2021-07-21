const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
            loader: 'ts-loader',
            options: {
              transpileOnly: true
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
        extractComments: false,
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            // 2. remove comments
            comments: false,
          },
        },
      })
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    })
  ]
};