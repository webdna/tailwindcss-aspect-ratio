const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

module.exports = plugin(function({ theme, variants, e, addUtilities }) {
  const aspectRatioUtilities = _.fromPairs(
    _.map(theme('aspectRatio'), (value, modifier) => {
      const aspectRatio = _.isArray(value) ? value[0] / value[1] : value;
      return [
        `.${e(`aspect-ratio-${modifier}`)}`,
        {
          paddingBottom: aspectRatio == 0 ? '0' : `${1 / aspectRatio * 100}%`,
        },
      ];
    })
  );

  addUtilities(aspectRatioUtilities, variants('aspectRatio'));
}, {
  theme: {
    aspectRatio: {},
  },
  variants: {
    aspectRatio: ['responsive'],
  },
});
