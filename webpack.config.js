const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  watch: true,
  entry: {
    main: path.resolve(__dirname, './src/js/index.ts'),
  },
  module: {
    rules: [
      {
        // JavaScript
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        // CSS SASS SCSS
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              url:false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      //options
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
}