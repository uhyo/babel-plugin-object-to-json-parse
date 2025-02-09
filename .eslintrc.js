module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    // cwdからのpath
    project: "./tsconfig.json",
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": 0,
  },
  env: {
    node: true,
  },
  settings: {
    node: {
      tryExtensions: [".ts", ".tsx", ".js", ".json"],
    },
  },
}
