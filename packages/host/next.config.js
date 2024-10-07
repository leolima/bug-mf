const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const path = require('path');

module.exports = {
  basePath: '/v2',
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {},
          exposes: {
            './Hello': './src/components/hello/index.jsx',
          },
          shared: {},
          getPublicPath: `function() {return "http://localhost:3000/v2/"}`,
        }),
      );
    }

    return config;
  },
};
