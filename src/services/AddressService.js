import axios from 'axios';

const ADDRESS_API_BASE_URL = "https://juhmesquitaviagens-back-end.herokuapp.com/address/";

class AddressService {

    getAddress(){
        return axios.get(ADDRESS_API_BASE_URL);
    }

    createAddress(address){
        return axios.post(ADDRESS_API_BASE_URL + '/create', address);
    }

    getAddressById(addressId){
        return axios.get(ADDRESS_API_BASE_URL + '/getById/' + addressId);
    }

    updateAddress(address, addressId){
        return axios.put(ADDRESS_API_BASE_URL + '/update/' + addressId, address);
    }

    deleteAddress(addressId){
        return axios.delete(ADDRESS_API_BASE_URL + '/delete/' + addressId);
    }
}
export default new AddressService();