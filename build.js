const fs = require("fs");
const tokens = require("./tokens.json");

// transforming each token to a appropriate format
const transformedTokens = Object.keys(tokens).map((key) => ({
  name: `$${key}`,
  value: `${tokens[key].value}rem`,
}));

// formatting all the tokens into a file format
const formattedTokens = transformedTokens
  .map((token) => `${token.name}: ${token.value};`)
  .join("\n");

fs.writeFileSync("dist/variables.scss", formattedTokens);
