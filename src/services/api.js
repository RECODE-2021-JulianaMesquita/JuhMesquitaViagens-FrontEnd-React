import axios from 'axios';

const api = axios.create({
    baseURL: 'https://juhmesquitaviagens-back-end.herokuapp.com/'
});

export default api