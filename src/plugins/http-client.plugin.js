const axios = require('axios');

const httpClientPlugin = {
  get: async (url) => {
    // const response = await fetch(url);
    // return await response.json();
    const request = await axios.get(url);
    return request.data;
  },
  post: async (url, data) => {},
  put: async (url, data) => {},
  delete: async (url, data) => {},
};

module.exports = {
  httpClientPlugin,
};
