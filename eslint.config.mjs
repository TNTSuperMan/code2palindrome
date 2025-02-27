import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

const tabLength = 4;

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ['**/*.{js,mjs,cjs,ts}']},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        env: {
            node: true
        },
        rules: {
            'no-unused-vars': ['error'],
            'no-undef': ['error'],
            eqeqeq: ['error', 'always'],
            'no-console': ['warn'],
            indent: ['error', tabLength],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'brace-style': ['error', '1tbs'],
            camelcase: ['error', { properties: 'always' }],
            'no-magic-numbers': ['warn', { ignore: [0, 1] }],
            'consistent-return': ['error'],
            'no-var': ['error'],
            complexity: ['warn', { max: 10 }],
            'prefer-const': ['error'],
        },
    }
];