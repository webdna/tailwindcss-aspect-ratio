const _ = require('lodash');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const aspectRatioPlugin = require('./index.js');

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      _.merge({
        theme: {
          screens: {
            'sm': '640px',
          },
        },
        corePlugins: false,
        plugins: [
          aspectRatioPlugin,
        ],
      }, config)
    )
  )
  .process('@tailwind utilities', {
    from: undefined,
  })
  .then(result => {
    return result.css;
  });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('there is no output by default', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(``);
  });
});

test('ratios can be customized', () => {
  return generatePluginCss({
    theme: {
      aspectRatio: {
        '2/1': [2, 1],
        '16/9': [16, 9],
      },
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .aspect-ratio-2\\/1 {
        padding-bottom: 50%;
      }
      .aspect-ratio-16\\/9 {
        padding-bottom: 56.25%;
      }
      @media (min-width: 640px) {
        .sm\\:aspect-ratio-2\\/1 {
          padding-bottom: 50%;
        }
        .sm\\:aspect-ratio-16\\/9 {
          padding-bottom: 56.25%;
        }
      }
    `);
  });
});

test('ratios can be arrays or fractions', () => {
  return generatePluginCss({
    theme: {
      aspectRatio: {
        '5/2': [5, 2],
        '16/9': 16 / 9,
      },
    },
    variants: {
      aspectRatio: [],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .aspect-ratio-5\\/2 {
        padding-bottom: 40%;
      }
      .aspect-ratio-16\\/9 {
        padding-bottom: 56.25%;
      }
    `);
  });
});

test('ratio can be 0', () => {
  return generatePluginCss({
    theme: {
      aspectRatio: {
        'none': 0,
      },
    },
    variants: {
      aspectRatio: [],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .aspect-ratio-none {
        padding-bottom: 0;
      }
    `);
  });
});

test('variants can be customized', () => {
  return generatePluginCss({
    theme: {
      aspectRatio: {
        '2/1': [2, 1],
      },
    },
    variants: {
      aspectRatio: ['hover'],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .aspect-ratio-2\\/1 {
        padding-bottom: 50%;
      }
      .hover\\:aspect-ratio-2\\/1:hover {
        padding-bottom: 50%;
      }
    `);
  });
});
