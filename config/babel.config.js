const packageJson = require('../package.json');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: packageJson.dependencies['core-js'],
        debug: true,
      },
    ],
  ],
};
