const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: `./.env.production.local`,
    }),
  ],
};
