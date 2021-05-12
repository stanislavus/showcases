const {addDecorator} = require('@storybook/react');
const {withTests} = require('@storybook/addon-jest');

const results = require('../src/.jest-test-results.json');

addDecorator(
  withTests({
    results,
  })
);

module.exports = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
}