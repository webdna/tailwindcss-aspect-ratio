const _ = require('lodash');

module.exports = function() {
  return ({ config, e, addUtilities, variants }) => {
    const defaultTheme = {};
    const defaultVariants = ['responsive'];

    const aspectRatioUtilities = _.fromPairs(
      _.map(config('theme.aspectRatio', defaultTheme), (value, modifier) => {
        const aspectRatio = _.isArray(value) ? value[0] / value[1] : value;
        return [
          `.${e(`aspect-ratio-${modifier}`)}`,
          {
            paddingBottom: `${1 / aspectRatio * 100}%`,
          },
        ];
      })
    );

    addUtilities(aspectRatioUtilities, variants('aspectRatio', defaultVariants));
  };
};
