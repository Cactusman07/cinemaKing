// Import adapter for enzyme
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Enzyme = require('enzyme');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// Log all jsDomErrors when using jsdom testEnvironment
window._virtualConsole &&
  window._virtualConsole.on('jsdomError', function(error) {
    console.error('jsDomError', error.stack, error.detail);
  });

process.env = Object.assign(process.env);
