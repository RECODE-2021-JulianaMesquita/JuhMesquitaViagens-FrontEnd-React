import axios from 'axios';

const PACKAGE_API_BASE_URL = "https://juhmesquitaviagens-back-end.herokuapp.com/packageTravel/";

class packageTravelService {

    getPackages() {
        return axios.get(PACKAGE_API_BASE_URL);
    }

    createPackage(packageTravel) {
        return axios.post(PACKAGE_API_BASE_URL + '/create', packageTravel);
    }

    getPackageById(packageTravelId) {
        return axios.get(PACKAGE_API_BASE_URL + '/getById/' + packageTravelId);
    }

    updatePackage(packageTravel, packageTravelId) {
        return axios.put(PACKAGE_API_BASE_URL + '/update/' + packageTravelId, packageTravel);
    }

    deletePackage(packageTravelId) {
        return axios.delete(PACKAGE_API_BASE_URL + '/delete/' + packageTravelId);
    }
}
export default new packageTravelService();