module.exports = {
  gifsicle: { interlaced: true, optimizationLevel: 3 },
  mozjpeg: { progressive: true, quality: 75 },
  pngquant: { quality: [0.6, 0.75] },
  webp: { quality: 75 },
  svgo: {
    plugins: [
      { removeViewBox: false },
      { cleanupIDs: false },
      { removeUnknownsAndDefaults: false },
      {
        addAttributesToSVGElement: {
          attributes: [{ focusable: "false" }, { "aria-hidden": "true" }],
        },
      },
    ],
  },
};
