const webpackFinal = require('../webpack.config');

module.exports = {
  stories: ['../src/*.stories.js'],
  addons: ['@storybook/addon-knobs'],
  webpackFinal,
};
