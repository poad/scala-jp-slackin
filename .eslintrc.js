module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    // add your custom rules here
    "rules": {
        '@typescript-eslint/indent': [
            'error',
            2
        ],
        'spaced-comment': [
            'error',
            'always',
            { markers: ['/ <reference'] }
        ],
        'max-len': ['error', { 'code': 100 }],
        'prefer-promise-reject-errors': ['off'],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx','.ts', '.tsx'] }],
        'react/prop-types': ['off'],
        'import/extensions': ['off'],
        'jsx-a11y/anchor-is-valid': ['off'],
        'no-return-assign': ['off'],
        'react/react-in-jsx-scope': ['off'],
        'react/jsx-props-no-spreading': ['off'],
    }
};
