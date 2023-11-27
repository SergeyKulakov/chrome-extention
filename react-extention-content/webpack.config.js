// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  entry: {
    'react-content-app': './src/index.tsx',
    'react-content-popup': './src/indexPopup.tsx',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, '..', 'extention'),
  },
};
