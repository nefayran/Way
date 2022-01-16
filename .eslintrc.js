module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-recommended", "airbnb-base", "plugin:prettier/recommended", "plugin:import/typescript"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-unused-vars": "off",
    "class-methods-use-this": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "no-shadow": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "state", // for vuex state
          "app", // for vue app
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
  },
};
