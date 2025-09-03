/** @type {import("prettier").Config} */
export default {
  printWidth: 120,
  useTabs: false,
  semi: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
