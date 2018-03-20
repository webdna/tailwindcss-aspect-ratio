const _ = require('lodash');

module.exports = function({ ratios, variants }) {
  return function({ addUtilities, e }) {
    const utilities = _.map(ratios, (padding, name) => ({
      [`.aspect-ratio-${e(name)}`]: {
        paddingTop: padding
      }
    }))

    addUtilities(utilities, variants)
  }
}
