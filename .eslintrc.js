module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["import", "@typescript-eslint","unused-imports", "react"],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    ENV: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        fixToUnknown: true,
        ignoreRestArgs: false
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow"
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow"
      }
    ],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-non-null-assertion": "off",

    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/destructuring-assignment": 0,
/*     "react/jsx-max-props-per-line": [1, { "maximum": 1 }],
    "react/jsx-first-prop-new-line": [1, "multiline"], */
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-wrap-multilines": ["error", { arrow: true, return: true, declaration: true }],
    "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
    "react/button-has-type": "off",

    "prettier/prettier": ["warn"],

    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-continue": "off",
    "no-restricted-syntax": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-use-before-define": "off",
    "require-await": "error",
    "spaced-comment": ["error", "always"],
    "no-underscore-dangle": "off",
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "no-plusplus": "off",
    "class-methods-use-this": "off",
    "unused-imports/no-unused-imports": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "max-len": [
      "warn",
      {
        code: 120,
        tabWidth: 2,
        comments: 1000,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }
    ],
    "import/extensions": "off",
  }
}