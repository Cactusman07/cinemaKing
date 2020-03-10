// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');
module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  verbose: true,
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js(x)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  transformIgnorePatterns: ['^.+\\.js$'],
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetTransformer.js',
    '\\.(css|less|scss)$': '<rootDir>/assetTransformer.js',
    '@selectors/(.*)': '<rootDir>/src/ts/selectors/$1',
    '@actions/(.*)': '<rootDir>/src/ts/actions/$1',
    '@components/(.*)': '<rootDir>/src/ts/components/$1',
    '@middleware/(.*)': '<rootDir>/src/ts/middleware/$1',
    '@store/(.*)': '<rootDir>/src/ts/store/$1',
    '@reducers/(.*)': '<rootDir>/src/ts/reducers/$1',
    '@utilities/(.*)': '<rootDir>/src/ts/utilities/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coveragePathIgnorePatterns: ['/node_modules', '/src/root/i18n', 'jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  testURL: 'http://localhost:8080'
};
