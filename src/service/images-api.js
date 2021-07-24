import axios from 'axios';

const API_KEY = '21405447-01f360137f209ab5af64c83fa';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    q: searchQuery,
    page: currentPage,
    per_page: pageSize,
    key: API_KEY,
  });

  return axios.get(`${BASE_URL}?${searchParams}`).then(response => {
    return response.data.hits;
  });
};

export default { fetchImages };
