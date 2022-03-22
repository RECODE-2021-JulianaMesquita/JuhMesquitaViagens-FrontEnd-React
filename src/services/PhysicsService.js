import axios from 'axios';

const PHYSICS_API_BASE_URL = "https://juhmesquitaviagens-back-end.herokuapp.com/physics/";

class PhysicsService {

    getPhysics(){
        return axios.get(PHYSICS_API_BASE_URL);
    }

    createPhysics(physics){
        return axios.post(PHYSICS_API_BASE_URL + '/create', physics);
    }

    getPhysicsById(physicsId){
        return axios.get(PHYSICS_API_BASE_URL + '/getById/' + physicsId);
    }

    updatePhysics(physics, physicsId){
        return axios.put(PHYSICS_API_BASE_URL + '/update/' + physicsId, physics);
    }

    deletePhysics(physicsId){
        return axios.delete(PHYSICS_API_BASE_URL + '/delete/' + physicsId);
    }
}
export default new PhysicsService();