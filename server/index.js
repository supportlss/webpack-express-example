const express = require('express');

const app = express();
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../config/webpack.config.js');

const compiler = webpack(webpackConfig);

app.use(
  WebpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    log: console.log,
  }),
);

app.use(webpackHotMiddleware(compiler));

// app.use(express.static('../dist'));


app.listen(3000, () => console.log('App listening on port 3000!'));
