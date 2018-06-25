const _ = require('lodash');

module.exports = function({ ratios, variants }) {
  return function({ addUtilities, e }) {
    const utilities = _.map(ratios, ([width, height], name) => ({
      [`.${e(`aspect-ratio-${name}`)}`]: {
        paddingTop: `${((Math.round(height) / Math.round(width)) * 100).toFixed(2)}%`
      }
    }))

    addUtilities(utilities, variants)
  }
}
