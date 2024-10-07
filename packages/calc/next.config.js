const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const path = require('path');

module.exports = {
  basePath: '/calc',
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'calc',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            host: `host@http://localhost:3000/v2/_next/static/chunks/remoteEntry.js`,
          },
          exposes: {},
          shared: {},
          getPublicPath: `function() {return "http://localhost:3000/calc/"}`,
        }),
      );
    }

    return config;
  },
};
