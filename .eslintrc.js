module.exports = {
  //   env: {
  //     browser: true,
  //     commonjs: true,
  //     es2021: true,
  //   },
  //   extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "max-len": [1, 70, 2, { ignoreComments: true }],
  },
};
