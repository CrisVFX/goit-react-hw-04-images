import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41346783-54974ba518e4200dea29991c0';

export const getAPI = async (query, page) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url);

  return response.data;
};
