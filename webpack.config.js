const webpack = require('webpack');
const path = require('path');
const config1 = {
  entry: './Lab1/Zadanie1/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'Lab1/Zadanie1'),
    filename: 'index.js'
  }
};
const config2 = {
    entry: './Lab1/Zadanie2/lab1.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      path: path.resolve(__dirname, 'Lab1/Zadanie2'),
      filename: 'lab1.js'
    }
  };
  const config3 = {
    entry: './Lab2/src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      path: path.resolve(__dirname, 'Lab2/dest'),
      filename: 'index.js'
    }
  };
module.exports = [config1,config2,config3];