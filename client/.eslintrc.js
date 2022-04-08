module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "lines-between-class-members": "off",
    "react/prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  ignorePatterns: [
    "src/redux/*",
    "src/*",
    "src/utils/*",
    "src/components/NavBar/*",
    "src/styles/themes/*",
    "src/styles/themes/LightTheme.js",
    "src/containers/Users/*",
    "src/containers/Users/Users.js",
    "src/components/UserTable/*",
  ],
};
