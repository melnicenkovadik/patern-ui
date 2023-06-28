module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/preset-scss'],
  webpackFinal: config => {
    config.resolve.modules = [...(config.resolve.modules || []), "./src"];
    config.module.rules = [...(config.module.rules || []), {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      type: "javascript/auto",
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true
        }
      }, 'url-loader']
    }];
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};