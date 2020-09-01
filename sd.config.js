module.exports = {
  source: ["tokens.json"],
  platforms: {
    web: {
      transformGroup: "web",
      buildPath: "dist/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
  },
};
