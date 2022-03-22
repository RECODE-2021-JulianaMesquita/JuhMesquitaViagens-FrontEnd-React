import axios from 'axios';

const PACKAGE_API_BASE_URL = axios.create({baseURL:'https://juhmesquitaviagens-back-end.herokuapp.com/packageTravel'});

class packageTravelService {

    getPackages() {
        return axios.get(PACKAGE_API_BASE_URL);
    }

    createPackage(packageTravel) {
        return axios.post(PACKAGE_API_BASE_URL, packageTravel);
    }

    getPackageById(packageTravelId) {
        return axios.get(PACKAGE_API_BASE_URL + '/' + packageTravelId);
    }

    updatePackage(packageTravel, packageTravelId) {
        return axios.put(PACKAGE_API_BASE_URL + '/' + packageTravelId, packageTravel);
    }

    deletePackage(packageTravelId) {
        return axios.delete(PACKAGE_API_BASE_URL + '/' + packageTravelId);
    }
}
export default new packageTravelService();