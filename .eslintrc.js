module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-console': 'warn',
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'never'],
        'no-empty': 'warn',
        'no-duplicate-case': 'warn',
        'no-unreachable': 'warn',
        'curly': 'warn',
        'eqeqeq': ['warn', 'always'],
        'no-alert': 'warn',
        'no-multi-spaces': 'warn',
        'block-spacing': ['warn', 'always'],
        'no-duplicate-imports': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'no-unused-vars': ['warn']
    }
}
