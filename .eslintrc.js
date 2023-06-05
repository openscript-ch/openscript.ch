module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'plugin:react/jsx-runtime', 'plugin:prettier/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'import/prefer-default-export': 'off',
        'import/no-relative-packages': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/require-default-props': 'off',
        'react/jsx-fragments': ['error', 'element'],
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
      },
    },
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime', 'plugin:prettier/recommended', 'plugin:mdx/recommended'],
      plugins: ['react'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
        'import/prefer-default-export': 'off',
        'import/no-relative-packages': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-fragments': ['error', 'element'],
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
      },
    },
  ],
};
