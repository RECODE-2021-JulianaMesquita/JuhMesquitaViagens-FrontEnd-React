import axios from 'axios';

const Legal_API_BASE_URL = "https://juhmesquitaviagens-back-end.herokuapp.com/legal";

class LegalService {

    getLegals() {
        return axios.get(Legal_API_BASE_URL);
    }

    createLegal(legal) {
        return axios.post(Legal_API_BASE_URL, legal);
    }

    getLegalById(legalId) {
        return axios.get(Legal_API_BASE_URL + '/' + legalId);
    }

    updateLegal(legal, legalId) {
        return axios.put(Legal_API_BASE_URL + '/' + legalId, legal);
    }

    deleteLegal(legalId) {
        return axios.delete(Legal_API_BASE_URL + '/' + legalId);
    }
}
export default new LegalService();