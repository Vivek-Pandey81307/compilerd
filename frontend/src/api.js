import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const executeCode = (language, script) => {
  return axios.post(`${API_URL}/execute`, {
    language,
    script
  });
};
