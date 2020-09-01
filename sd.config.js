module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    sass: {
      transformGroup: "scss",
      buildPath: "dist/",
      files: [
        {
          format: "scss/variables",
          destination: "variables.scss",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          format: "css/variables",
          destination: "variables.css",
        },
      ],
    },
  },
};
