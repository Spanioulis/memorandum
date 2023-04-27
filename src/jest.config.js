module.exports = {
   testEnvironment: 'node',
   transform: {
      '^.+\\.jsx?$': 'babel-jest'
   },
   moduleFileExtensions: ['js', 'jsx'],
   globals: {
      'process.env.NODE_ENV': 'test'
   },
   transformIgnorePatterns: ['node_modules/(?!(jest-test))']
};
