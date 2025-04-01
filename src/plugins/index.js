const getAge = require('./getAge');
const getUuid = require('./getUuid');
const { httpClientPlugin } = require('./http-client.plugin');

module.exports = {
  getAge,
  getUuid,
  http: httpClientPlugin
};
