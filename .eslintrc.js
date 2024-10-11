module.exports = {
    parser: "@babel/eslint-parser",  // or 'babel-eslint' for older versions
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: [
      "react",
      "prettier",
    ],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      // Enable Prettier formatting
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          trailingComma: "es5",
          semi: true,
          jsxSingleQuote: false,
          printWidth: 80,
        },
      ],
  
      // General formatting rules
      "no-multi-spaces": "error", // No multiple spaces
      "quotes": ["error", "single"], // Prefer single quotes
      "semi": ["error", "always"], // Require semicolons
  
      // React-specific rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/jsx-props-no-spreading": "off", // Allow prop spreading
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // Allow JSX in both .js and .jsx files
      "react/self-closing-comp": "error", // Enforce self-closing on components without children
  
      // JSX formatting rules
      "react/jsx-closing-bracket-location": [1, "line-aligned"], // Align closing bracket with opening tag
      "react/jsx-indent": ["error", 2], // 2-space indentation
      "react/jsx-indent-props": ["error", 2], // Indent props
      "react/jsx-curly-spacing": ["error", { when: "never", children: true }], // No spaces inside JSX curly braces
      "react/jsx-tag-spacing": [
        "error",
        { beforeSelfClosing: "always" },
      ], // Space before self-closing JSX tags
  
      // Code cleanliness rules
      "react/prop-types": "off", // Disable prop-types if using TypeScript
      "react/display-name": "off", // Disable display name requirement for functional components
  
      // Optional best practices
      "react/jsx-key": "error", // Ensure `key` is used in lists
      "react/no-array-index-key": "warn", // Avoid using array index as key
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  };
  