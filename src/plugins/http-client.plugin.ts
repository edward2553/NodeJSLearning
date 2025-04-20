// const axios = require('axios');
import axios from 'axios';

export const httpClientPlugin = {
  get: async (url: string) => {
    // const response = await fetch(url);
    // return await response.json();
    const request = await axios.get(url);
    return request.data;
  },
  post: async (url: string, data: unknown) => {},
  put: async (url: string, data: unknown) => {},
  delete: async (url: string, data: unknown) => {},
};
