# Aspect Ratio Tailwind Plugin

## Installation

Add this plugin to your project:

```bash
# Install via npm
npm install --save-dev tailwindcss-aspect-ratio
```

## Usage

This plugin uses the `aspectRatio` key in your Tailwind config’s `theme` and `variants` objects to generate aspect ratio utilities. Here is an example:

```js
// tailwind.config.js
{
  theme: {
    aspectRatio: { // defaults to {}
      'square': [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
  },
  variants: {
    aspectRatio: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-aspect-ratio')(),
  ],
}
```

This configuration would create the following classes, as well as their responsive variants:

```css
.aspect-ratio-square { padding-top: 100%; }
.aspect-ratio-16/9 { padding-top: 56.25%; }
.aspect-ratio-4/3 { padding-top: 75%; }
.aspect-ratio-21/9 { padding-top: 42.86%; }
```

The `aspectRatio` theme is an object where the key is the suffix of the class name and the value is an array of width and height `[{width}, {height}]`.

In the example above you can see that the key does not have to replicate the values, so if you prefer "nice names" you could have some like `'cinema': [21, 9]` or `'letterbox': [16,9]`.
