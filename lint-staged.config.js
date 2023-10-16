module.exports = {
    // Lint then format files
    '**/*.(ts|tsx|js|jsx)': (filenames) => [
        `yarn eslint --fix ${filenames.join(' ')}`,
        `yarn prettier --write ${filenames.join(' ')}`
    ],

    // Format JSON
    '**/*.(json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`
};
