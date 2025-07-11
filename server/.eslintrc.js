module.exports = {
    env: {
        node: true,
        es2021: true,
        jest: true // This tells ESLint that Jest globals like 'describe', 'it', 'expect' are available
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        // Add any custom rules here
    }
};
