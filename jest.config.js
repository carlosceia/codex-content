module.exports = {
  testRunner: 'jest-jasmine2',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'jest-preset-angular'
  },
  transformIgnorePatterns: ['/node_modules/(?!cheerio)'],
  preset: 'jest-preset-angular',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec|loader-markdown))\\.(tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
