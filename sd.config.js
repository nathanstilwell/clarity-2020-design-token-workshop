module.exports = {
  transform: {
    nameComponent: require("./transforms/nameComponent"),
  },
  source: ["tokens/**/*.json"],
  platforms: {
    web: {
      transformGroup: "scss",
      buildPath: "web/dist/",
      files: [
        {
          format: "scss/variables",
          destination: "variables.scss",
        },
      ],
    },

    js: {
      transformGroup: "js",
      buildPath: "web/dist/",
      files: [
        {
          destination: "index.js",
          format: "javascript/es6",
        },
      ],
    },

    jsComponent: {
      transforms: [`attribute/cti`, `nameComponent`, `size/rem`, `color/css`],
      buildPath: `web/dist/`,
      files: [
        {
          destination: `badge.js`,
          format: `javascript/es6`,
          filter: (token) =>
            token.path[0] === "component" && token.path[1] === "badge",
        },
      ],
    },
  },
};
