const path = require('path');

const config = require('../../config.json');

// import .env variables
require('dotenv-safe').config({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: config.NODE_ENV,
  port: config.PORT,
  jwtSecret: config.JWT_SECRET,
  jwtExpirationInterval: config.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri: config.NODE_ENV === 'test'
      ? config.MONGO_URI_TESTS
      : config.MONGO_URI,
  },
  logs: config.NODE_ENV === 'production' ? 'combined' : 'dev',
};
