# Aspect Ratio Plugin for Tailwind CSS

## Installation

```bash
npm install tailwindcss-aspect-ratio
```

## Usage

This plugin uses the `aspectRatio` key in your Tailwind config’s `theme` and `variants` objects to generate aspect ratio utilities. Here is an example:

```js
// tailwind.config.js
module.exports = {
  theme: {
    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],  // or 21 / 9
    },
  },
  variants: {
    aspectRatio: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
  ],
};
```

The `aspectRatio` theme object is a dictionary where the key is the suffix of the class name and the value is an array of width and height or a number that represents a width / height ratio. The key doesn’t have to replicate the values, so if you prefer "nice names" you could have something like `'video': [16, 9]`.

The above configuration would create the following classes, as well as their responsive variants:

```css
.aspect-ratio-none {
  padding-bottom: 0;
}
.aspect-ratio-square {
  padding-bottom: 100%;
}
.aspect-ratio-16\/9 {
  padding-bottom: 56.25%;
}
.aspect-ratio-4\/3 {
  padding-bottom: 75%;
}
.aspect-ratio-21\/9 {
  padding-bottom: 42.86%;
}
```

Note: The `/` character is escaped in CSS and turned into `\/`, but the actual class name you would use in your HTML is `aspect-ratio-16/9`.
