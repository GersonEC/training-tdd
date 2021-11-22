module.exports = function() { 
  return {
    testFramework: 'jest', // 1
    env: {
      type: 'node', // 2
    },
    tests: ['__tests__/**/*.test.js'], // 3
    files: ['**/*.js', '!node_modules/**/*', '!**/*.test.js', '!**/.*'], // 4
  };
};