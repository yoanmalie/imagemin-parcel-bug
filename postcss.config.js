module.exports = {
  plugins: {
    autoprefixer: true,
    cssnano: {
      preset: [
        "default",
        {
          discardComments: {
            removeAll: process.env.NODE_ENV === "production",
          },
          normalizeWhitespace: process.env.NODE_ENV === "production",
          minifyFontValues: {
            removeQuotes: false,
          },
        },
      ],
    },
    "postcss-combine-media-query": true,
  },
};
