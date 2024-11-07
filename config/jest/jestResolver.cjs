// jestResolver.cjs
const path = require('path');

module.exports = (request, options) => {
  if (request.endsWith('?react')) {
    return options.defaultResolver(request.replace('?react', ''), options);
  }

  return options.defaultResolver(request, options);
};
