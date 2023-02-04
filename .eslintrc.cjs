module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'align-assignments',
    ],
    'rules': {
        // force single quotes
        'quotes': ['error', 'single'],
        // force semicolons
        'semi': ['error', 'always'],
        // 4-space indentation
        'indent': ['error', 4],
        // align assignments
        'align-assignments/align-assignments': [2, { 'requiresOnly': false }],
        // consistent spacing inside braces
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        // space after comma
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        // force trailing commas
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': ['error', 'always'],
        'key-spacing': ['error', { 'afterColon': true }],
        // unix line break (\n rather than \r\n)
        'linebreak-style': ['error', 'unix'],
    },
};
