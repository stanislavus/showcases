const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodConfig = require('./config.prod.js');

module.exports = merge(prodConfig, {
  plugins: [new BundleAnalyzerPlugin({
    analyzeMode: 'static',
    openAnalyzer: true,
    reportFilename: 'bundle_sizes.html',
  })],
});
