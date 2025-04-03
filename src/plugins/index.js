const getAge = require('./getAge');
const getUuid = require('./getUuid');
const { httpClientPlugin } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = {
  getAge,
  getUuid,
  http: httpClientPlugin,
  buildLogger
};
