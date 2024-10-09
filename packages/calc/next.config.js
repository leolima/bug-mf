const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const path = require('path');

module.exports = {
  basePath: '/calc',
  webpack(config, options) {
    config.output.publicPath = 'auto'
    
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
        }),
      );
    }

    return config;
  },
};
