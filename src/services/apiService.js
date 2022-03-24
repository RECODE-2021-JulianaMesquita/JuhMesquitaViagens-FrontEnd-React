import axios from 'axios';

const apiService = axios.create({
    baseURL: 'https://juhmesquitaviagens-back-end.herokuapp.com/'
});

export default apiService