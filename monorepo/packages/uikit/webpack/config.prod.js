const { merge } = require('webpack-merge');
const baseConfig = require('./config.base.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
