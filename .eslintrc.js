module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["svelte3", "prettier"],
  overrides: [{files: ["*.svelte"], processor: "svelte3/svelte3"}],
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": ["error"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};
