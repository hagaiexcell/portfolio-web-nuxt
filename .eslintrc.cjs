module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:nuxt/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "vue/no-dupe-keys": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    "no-console": ["warn", { allow: ["warn", "error", "table"] }],
  },
};
