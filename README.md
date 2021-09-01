# ⛔️ DEPRECATED

This plugin was created before the `aspect-ratio` property was supported by any browser. You should now use the official [`@tailwindcss/aspect-ratio`](https://github.com/tailwindlabs/tailwindcss-aspect-ratio) plugin.

# Aspect Ratio Plugin for Tailwind CSS

## Requirements

This plugin requires Tailwind CSS 1.2 or later. If your project uses an older version of Tailwind, you should install the latest 2.x version of this plugin (`npm install tailwindcss-aspect-ratio@2.x`).

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

Which you can then use in your HTML like this:

```html
<div class="relative">
  <div class="aspect-ratio-16/9"></div>
  <img src="thumbnail.jpg" class="absolute left-0 top-0 w-full h-full object-cover">
</div>
```

Or inside a `flex` container to behave like a “minimum aspect ratio” (if the content overflows, the container will grow instead of forcing the aspect ratio):

```html
<div class="flex bg-gray-300">
  <div class="aspect-ratio-2/1"></div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed dictum sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas et lacus ut dolor rutrum dignissim.
  </p>
</div>
```
